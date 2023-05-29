import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.API_KEY,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
