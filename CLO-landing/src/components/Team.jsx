import Card from "./Card";
import santiago from "../assets/imgs/santiago.webp";
import juanjo from "../assets/imgs/juanjo.webp";
import emilio from "../assets/imgs/emilio.webp";
import lisandro from "../assets/imgs/lisandro.webp";
import maria from "../assets/imgs/maria.webp";
import josefina from "../assets/imgs/josefina.webp";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="team"
        className="pt-24 pb-10 px-6 sm:p-16 md:p-24 bg-no-repeat"
      >
        <h4 className="font-accent text-4xl huge:text-6xl text-light mb-4 mt-24 md:mt-auto huge:mb-8 huge:mt-32">
          {t("titulo_equipo_1")}{" "}
          <span className="font-accentBoldItalic text-accent">
            {t("titulo_equipo_2")}
          </span>
        </h4>
        <hr className="w-16 huge:w-32 text-light mb-4 huge:mb-8"></hr>
        <p className="text-base huge:text-xl w-full sm:w-2/3 text-light mb-4 mt-8 sm:mt-auto">
          {t("parrafo_equipo_1")}
          <span className="font-primaryBold">{t("parrafo_equipo_2")}</span>{" "}
          {t("parrafo_equipo_3")}{" "}
          <span className="font-primaryBold">{t("parrafo_equipo_4")}</span>
          {t("parrafo_equipo_5")}{" "}
          <span className="font-primaryBold">{t("parrafo_equipo_6")}</span>
          {t("parrafo_equipo_7")}{" "}
          <span className="font-primaryBold">{t("parrafo_equipo_8")}</span>
          {t("parrafo_equipo_9")}{" "}
          <span className="font-primaryBold">{t("parrafo_equipo_10")}</span>
          {t("parrafo_equipo_11")}
        </p>
        <div className="flex flex-wrap justify-center gap-12 mt-16 sm:my-24">
          <Card
            img={santiago}
            link="https://www.linkedin.com/in/santiago-cornu-labat-aa550730/"
            name="Santiago Cornu Labat"
            category="PARTNER"
          />
          <Card
            img={juanjo}
            link="https://www.linkedin.com/in/juan-jos%C3%A9-ot%C3%A1lvares-493b8562/"
            name="Juan José Otálvares"
            category="PARTNER"
          />
        </div>
        <div className="flex overflow-x-scroll justify-start lg:flex-wrap lg:justify-center lg:overflow-x-auto gap-6 sm:gap-12 ml-10 sm:ml-0 mb-12 sm:mb-auto mt-12 sm:mt-24 huge:mb-24">
          <Card
            img={lisandro}
            link="https://www.linkedin.com/in/santiago-cornu-labat-aa550730/"
            name="Lisandro Musa"
          />
          <Card
            img={maria}
            link="https://www.linkedin.com/in/juan-jos%C3%A9-ot%C3%A1lvares-493b8562/"
            name="María de la Paz Otálvares"
          />
          <Card
            img={josefina}
            link="https://www.linkedin.com/in/santiago-cornu-labat-aa550730/"
            name="Josefina Vivone"
          />
          <Card
            img={emilio}
            link="https://www.linkedin.com/in/juan-jos%C3%A9-ot%C3%A1lvares-493b8562/"
            name="Emilio Sojo"
          />
        </div>
      </section>
    </>
  );
}
