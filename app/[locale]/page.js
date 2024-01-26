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
import Regions from "@/Components/Regions";
import Footer from "@/Components/Footer";
import BookButton from "@/Components/BookButton";
import Contact from "@/Components/Contact";
import Services from "@/Components/Services";
import Loading from "@/Components/Loading";

const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <Loading />
      <main className="h-full main">
        <Header />

        <Main />
        <SlidingImages />
        <Regions />
        <Rooms />
        <Services />

        <Contact />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
