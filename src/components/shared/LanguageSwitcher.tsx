"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing"; // Special import!
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "am" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button variant="ghost" onClick={toggleLanguage}>
      {locale === "en" ? "🇺🇸 English" : "🇪🇹 አማርኛ"}
    </Button>
  );
}