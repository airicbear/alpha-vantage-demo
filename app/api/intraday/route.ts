import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = "https://www.alphavantage.co/query?";

  const urlParams = new URLSearchParams({
    function: "TIME_SERIES_INTRADAY",
    symbol: "IBM",
    interval: "5min",
    apikey: "demo",
  });

  const res = await fetch(url + urlParams, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
