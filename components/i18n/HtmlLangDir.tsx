"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getLangFromSearchParams, isRtl } from "@/lib/i18n";

export function HtmlLangDir() {
  const searchParams = useSearchParams();
  const lang = getLangFromSearchParams(searchParams);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl(lang) ? "rtl" : "ltr";
  }, [lang]);

  return null;
}

