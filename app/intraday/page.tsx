"use client";

import IntradayResponse from "@/app/model/intraday-model";
import { useEffect, useState } from "react";

import { Text } from "@chakra-ui/react";

export default function IntradayPage() {
  const [data, setData] = useState<IntradayResponse>();

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
      <Text>{JSON.stringify(data)}</Text>
    </main>
  );
}
