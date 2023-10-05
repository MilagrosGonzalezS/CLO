import MenuLink from "./MenuLink";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("English");

  function handleChangeLanguage() {
    setLanguage(language === "English" ? "Spanish" : "English");
    setTimeout(() => {
      i18n.changeLanguage(language === "English" ? "en" : "es");
    }, 0);
  }

  return (
    <>
      <ul className="flex flex-col justify-center md:flex-row">
        <MenuLink title={t("link_equipo")} href="#team" />
        <MenuLink title={t("link_servicios")} href="#practice" />
        <MenuLink title={t("link_contacto")} href="#contact" />
        <button
          className="my-4 pt-1 mx-4 huge:mx-12 self-start md:self-center text-light text-xs huge:text-xl relative group"
          onClick={handleChangeLanguage}
        >
          {language}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 mt-2 bg-accent transition-all group-hover:w-full"></span>
        </button>
      </ul>
    </>
  );
}
