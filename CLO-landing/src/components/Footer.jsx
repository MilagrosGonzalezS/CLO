import logo from "../assets/imgs/CLO-logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      id="contact"
      className="w-full h-fit text-center sm:text-left sm:h-72 huge:h-96 bg-cover bg-no-repeat bg-bottom"
    >
      <div className="bg-opacity w-full h-full px-4 py-8 sm:p-8 md:p-16">
        <h4 className="font-accentBold text-3xl huge:text-5xl text-light mb-8 sm:mb-4 mt-4 sm:mt-auto">
          {t("contacto")}
        </h4>
        <hr className="w-16 text-light mb-8 sm:mb-4 huge:mb-8 mx-auto sm:mx-0"></hr>
        <ul className="flex flex-col gap-10 sm:gap-8 h-full justify-between sm:h-auto sm:flex-row items-center text-light huge:text-xl">
          <li>
            Av del Libertador 5926, Piso 5°.<br></br> Ciudad Autónoma de Buenos
            Aires.
          </li>
          <li>
            <a className="relative group" href="tel:+5491147820042">
              4782-0042
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 mt-2 bg-accent transition-all group-hover:w-full"></span>
            </a>{" "}
            /{" "}
            <a className="relative group" href="tel:+5491147853314">
              4785-3314
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 mt-2 bg-accent transition-all group-hover:w-full"></span>
            </a>
            <br></br>
            <a className="relative group" href="mailto:contacto@clo.com.ar">
              contacto@clo.com.ar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 mt-2 bg-accent transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <div className="w-48 huge:w-72">
              <img className="w-full" src={logo} alt="CLO Logo" />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
