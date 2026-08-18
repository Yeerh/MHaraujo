#!/usr/bin/env bash
# Rodar como root: bash /opt/MHaraujo/emit-cert-teamma.sh
set -euo pipefail

DOMAIN="teamma.com.br"
EMAIL="${CERTBOT_EMAIL:-admin@teamma.com.br}"

if [[ ${EUID:-$(id -u)} -ne 0 ]]; then
  echo "Execute como root: bash /opt/MHaraujo/emit-cert-teamma.sh"
  exit 1
fi

echo "DNS atual (1.1.1.1):"
dig @1.1.1.1 "$DOMAIN" A +short || true
dig @1.1.1.1 "www.$DOMAIN" A +short || true
echo "Origem deste servidor (público): $(curl -4 -sS --max-time 5 ifconfig.me || true)"
echo "Nota: se os A forem IPs Cloudflare (104.x / 172.67.x), o painel CF deve ter A -> 143.208.128.159 (proxy laranja ok)."
echo

a2enmod proxy proxy_http headers rewrite ssl >/dev/null 2>&1 || true
apache2ctl configtest
systemctl reload apache2

run_cert() {
  certbot --apache \
    --non-interactive \
    --agree-tos \
    --email "$EMAIL" \
    --redirect \
    --keep-until-expiring \
    "$@"
}

if dig @1.1.1.1 "www.$DOMAIN" A +short | grep -q .; then
  echo "Emitindo para $DOMAIN + www.$DOMAIN ..."
  if ! run_cert -d "$DOMAIN" -d "www.$DOMAIN"; then
    echo "Falha com www; tentando só $DOMAIN ..."
    run_cert -d "$DOMAIN"
  fi
else
  echo "www sem A/AAAA; emitindo só $DOMAIN ..."
  run_cert -d "$DOMAIN"
fi

apache2ctl configtest
systemctl reload apache2
echo "CERT_OK $DOMAIN"
ls -la "/etc/letsencrypt/live/$DOMAIN/" 2>/dev/null || ls -la /etc/letsencrypt/live/ | head
