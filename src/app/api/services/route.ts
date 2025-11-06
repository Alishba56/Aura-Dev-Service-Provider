import { NextResponse } from 'next/server'
import { services } from "../../../data/service";

export async function GET() {
  return NextResponse.json({ services })
}
