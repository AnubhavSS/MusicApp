"use client";
import qs from "query-string";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setvalue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 1000);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [router, debouncedValue]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setvalue(e.target.value)}
    />
  );
};

export default SearchInput;
