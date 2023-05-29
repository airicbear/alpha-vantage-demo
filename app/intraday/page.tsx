"use client";

import { useEffect, useState } from "react";

export default function IntradayPage() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/intraday`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    };

    fetchData();
  });

  return (
    <main>
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}
