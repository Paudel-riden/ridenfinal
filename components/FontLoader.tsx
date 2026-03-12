"use client";

import { useEffect } from "react";

export function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap";
    link.media = "all";
    document.head.appendChild(link);
  }, []);
  return null;
}
