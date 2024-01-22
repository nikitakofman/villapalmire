import Image from "next/image";
import initTranslations from "../i18n";
import Main from "@/Components/Main";
import TranslationsProvider from "@/Components/TranslationsProvider";
import LanguageChanger from "@/Components/LanguageChangerMobile";
import Header from "@/Components/Header";
import Rooms from "@/Components/Rooms";
import SlidingPics from "@/Components/SlidingPics";
import SlidingImages from "@/Components/SlidingImages";
import StaticImages from "@/Components/StaticImages";

const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <main className="h-full">
        <Header />
        <Main />
        <SlidingImages />

        <Rooms />
      </main>
    </TranslationsProvider>
  );
}
