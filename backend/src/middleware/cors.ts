// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();

  // Define los orígenes permitidos
  const allowedOrigins = ['http://localhost:3000', 'https://tudominio.com'];

  const origin = req.headers.get('origin');

  if (allowedOrigins.includes(origin)) {
    res.headers.set('Access-Control-Allow-Origin', origin);
  }

  res.headers.set(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE,OPTIONS',
  );
  res.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization',
  );

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: res.headers });
  }

  return res;
}
