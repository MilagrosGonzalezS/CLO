import Accordion from "./Accordion";
import { useTranslation } from "react-i18next";

export default function Practice() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="practice"
        className="py-10 px-6 sm:p-16 md:p-24 bg-no-repeat"
      >
        <h4 className="font-accent text-4xl huge:text-6xl text-light pt-24 mb-4 huge:mb-8">
          {t("titulo_practica_1")}
          <span className="font-accentBoldItalic">
            {t("titulo_practica_2")}
          </span>
        </h4>
        <hr className="w-16 text-light mb-4 huge:w-32"></hr>
        <div className="flex flex-wrap gap-8 sm:gap-12 w-full justify-center my-16 sm:my-24">
          <Accordion
            title={t("derecho_corporativo_t")}
            parag={t("derecho_corporativo_p1")}
            parag2={t("derecho_corporativo_p2")}
            number={1}
          />
          <Accordion
            title={t("inversiones_extranjeras_t")}
            parag={t("inversiones_extranjeras_p")}
            number={2}
          />
          <Accordion
            title={t("derecho_societario_t")}
            parag={t("derecho_societario_p")}
            number={3}
          />
          <Accordion
            title={t("planificacion_pat_t")}
            parag={t("planificacion_pat_p1")}
            parag2={t("planificacion_pat_p2")}
            number={4}
          />
          <Accordion
            title={t("prevension_lavado_t")}
            parag={t("prevension_lavado_p")}
            number={5}
          />
          <Accordion title={t("fintech_t")} parag={t("fintech_p")} number={6} />
          <Accordion
            title={t("derecho_laboralymig_t")}
            parag={t("derecho_laboralymig_p")}
            number={7}
          />
          <Accordion
            title={t("startups_t")}
            parag={t("startups_p")}
            number={8}
          />
          <Accordion
            title={t("litigios_t")}
            parag={t("litigios_p")}
            number={9}
          />
          <Accordion
            title={t("derecho_maritimo_t")}
            parag={t("derecho_maritimo_p")}
            number={10}
          />
        </div>
      </section>
    </>
  );
}
