"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import React from "react";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    // Set the language in i18next
    i18n.changeLanguage(newLocale);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="switch">
      {i18nConfig.locales.map((locale, index) => (
        <React.Fragment key={locale}>
          <input
            type="radio"
            id={`lang-${locale}`}
            name="language"
            className="check-toggle check-toggle-round-flat"
            checked={currentLocale === locale}
            onChange={() => handleChange(locale)}
          />
          <label htmlFor={`lang-${locale}`} className="btn">
            {locale.toUpperCase()}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}
