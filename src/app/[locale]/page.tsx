import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

export default function HeroSection() {
  const t = useTranslations("Landing.Hero"); // Look at en.json

  return (
    <>
      <h1>{t("title")}</h1>
      <LanguageSwitcher />
    </>
  );
}
