import { monthlyPackages, smePackages, addOns } from '../i18n/packages';

// Package data for the WhatsApp assistant (mieyar-whatsapp-agent), so prices stay in one place.
export const GET = () =>
  new Response(JSON.stringify({ monthlyPackages, smePackages, addOns }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
