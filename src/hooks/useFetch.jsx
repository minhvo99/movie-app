/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
const defaultHeader = {
  Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  "Content-Type": "application/json;charset=utf-8",
  Accept: "application/json",
};
const useFetch = (
  { url, method = "GET", header = {} },
  { enabled } = { enabled: true },
) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (enabled) {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_BASE_URL}${url}`, {
        method,
        headers: {
          ...defaultHeader,
          ...header,
        },
      })
        .then(async (res) => {
          const data = await res.json();
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [JSON.stringify(header), method, url, enabled]);
  return { data, isLoading };
};

export default useFetch;
