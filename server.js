import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const host = "127.0.0.1";
const port = Number(process.env.PORT) || 3018;
const distDirectory = resolve(fileURLToPath(new URL("./dist/", import.meta.url)));
const indexFile = resolve(distDirectory, "index.html");
const assetsDirectory = resolve(distDirectory, "assets");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function sendFile(request, response, filePath, fileStats, statusCode) {
  let start = 0;
  let end = fileStats.size - 1;
  let responseStatus = statusCode;
  const rangeMatch = statusCode === 200 && request.headers.range?.match(/^bytes=(\d*)-(\d*)$/);

  if (rangeMatch) {
    const [, requestedStart, requestedEnd] = rangeMatch;
    start = requestedStart ? Number(requestedStart) : Math.max(0, fileStats.size - Number(requestedEnd));
    end = requestedEnd && requestedStart ? Number(requestedEnd) : end;

    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= fileStats.size) {
      response.writeHead(416, { "Content-Range": `bytes */${fileStats.size}` });
      response.end();
      return;
    }

    end = Math.min(end, fileStats.size - 1);
    responseStatus = 206;
  }

  const headers = {
    "Content-Type": contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
    "Content-Length": end - start + 1,
    "Cache-Control": filePath.startsWith(`${assetsDirectory}${sep}`) ? "public, max-age=31536000, immutable" : "no-cache",
    "Accept-Ranges": "bytes",
  };

  if (responseStatus === 206) {
    headers["Content-Range"] = `bytes ${start}-${end}/${fileStats.size}`;
  }

  response.writeHead(responseStatus, headers);

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(filePath, { start, end }).pipe(response);
}

async function serveErrorPage(request, response, pathname) {
  const indexStats = await stat(indexFile);
  const statusCode = pathname === "/505" || pathname === "/505/" ? 505 : 404;
  sendFile(request, response, indexFile, indexStats, statusCode);
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host || host}`).pathname);
  } catch {
    response.writeHead(400);
    response.end();
    return;
  }

  if (pathname === "/" || pathname === "/index.html") {
    const indexStats = await stat(indexFile);
    sendFile(request, response, indexFile, indexStats, 200);
    return;
  }

  const requestedFile = resolve(distDirectory, pathname.replace(/^\/+/, ""));
  const isInsideDist = requestedFile.startsWith(`${distDirectory}${sep}`);

  if (isInsideDist) {
    try {
      const fileStats = await stat(requestedFile);
      if (fileStats.isFile()) {
        sendFile(request, response, requestedFile, fileStats, 200);
        return;
      }
    } catch {
      // Missing files are handled by the branded error page below.
    }
  }

  try {
    await serveErrorPage(request, response, pathname);
  } catch {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Falha ao carregar a página.");
  }
});

server.listen(port, host, () => {
  console.log(`Site disponível em http://${host}:${port}`);
});
