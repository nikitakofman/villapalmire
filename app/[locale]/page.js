import Image from "next/image";
import initTranslations from "../i18n";
import Main from "@/Components/Main";
import TranslationsProvider from "@/Components/TranslationsProvider";

import Header from "@/Components/Header";
import Rooms from "@/Components/Rooms";

import SlidingImages from "@/Components/SlidingImages";

import Regions from "@/Components/Regions";

import Contact from "@/Components/Contact";
import Services from "@/Components/Services";
import Loading from "@/Components/Loading";

const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      {" "}
      <Loading />
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <main className="h-full main">
          <Header />

          <Main />
          <SlidingImages />
          <Regions />
          <Rooms />
          <Services />

          <Contact />
        </main>
      </TranslationsProvider>
    </>
  );
}
