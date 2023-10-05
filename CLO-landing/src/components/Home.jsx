import Navbar from "./Navbar";
import logo from "../assets/imgs/CLO-logo.png";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <section id="home">
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-dark bg-cover bg-no-repeat w-80"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-white bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">{t("close")}</span>
        </button>
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      <nav className="absolute top-0 z-40 w-full bg-opacity py-0 px-4 huge:px-10 sm:px-8 flex flex-wrap justify-between items-center">
        <div className="w-24 sm:w-36 huge:w-60">
          <img className="w-full" src={logo} alt="CLO Logo" />
        </div>
        <div className="hidden md:flex">
          <Navbar />
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-white md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">{t("open")}</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            type="button"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </nav>
      <Carousel />
      <div className="w-full h-48 sm:h-60 bg-dark flex justify-center items-center">
        <p className="text-center text-sm sm:text-base text-light w-2/3 md:w-1/2 huge:text-xl">
          {t("frase_1")}{" "}
          <span className="font-primaryBold text-accent">{t("frase_2")}</span>{" "}
          {t("frase_3")}{" "}
          <span className="font-primaryBold text-accent">{t("frase_4")}</span>{" "}
          {t("frase_5")}{" "}
          <span className="font-primaryBold text-accent">{t("frase_6")}</span>
          {t("frase_7")}
        </p>
      </div>
    </section>
  );
}
