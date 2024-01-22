"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

export default function LanguageChangerMobile() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const { countries } = useCountries();

  const dropdownRef = useRef(null); // Create a ref

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false); // Close dropdown if click is outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up
    };
  }, [dropdownRef]);

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    let newPath;
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      newPath = "/" + newLocale + currentPathname;
    } else {
      newPath = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }

    router.push(newPath);
  };

  return (
    <div className="relative pt-[1px]" ref={dropdownRef}>
      <div
        className={`cursor-pointer px-2 flex  text-[14px] rounded-md bg-none text-gray-800 font-semibold `}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p
          className={`language-selector mr-2  ${showDropdown ? "open" : ""}`}
        ></p>
        {currentLocale}
      </div>

      {showDropdown && (
        <div className="absolute  rounded-b-full overflow-hidden right-0 mt-2 py-2  bg-white  shadow-xl z-20">
          {["en", "fr", "it", "ru"].map((locale) => (
            <div
              key={locale}
              onClick={() => {
                handleChange(locale);
                setShowDropdown(false);
              }}
              className={`cursor-pointer px-4 py-2 text-sm text-[#6B7280] hover:text-gray-400 ${
                currentLocale === locale ? "font-semibold  text-black" : ""
              }`}
            >
              {locale}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
