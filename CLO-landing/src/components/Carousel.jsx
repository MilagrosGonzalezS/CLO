import home1 from "../assets/imgs/home1.webp";
import home2 from "../assets/imgs/home2.webp";
import home3 from "../assets/imgs/home3.webp";
import mobile1 from "../assets/imgs/Mobile1.webp";
import mobile2 from "../assets/imgs/Mobile2.webp";
import mobile3 from "../assets/imgs/Mobile3.webp";
import telefono from "../assets/imgs/telefono.png";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@react-hook/media-query";

export default function Carousel() {
  const { t } = useTranslation();

  const matches = useMediaQuery("only screen and (max-width: 650px)");

  return (
    <div id="default-carousel" className="w-full bg-bg" data-carousel="slide">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-[75vh] md:min-h-screen overflow-hidden mix-blend-overlay">
        {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={matches ? mobile1 : home1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={matches ? mobile2 : home2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={matches ? mobile3 : home3}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={matches ? mobile1 : home1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={matches ? mobile2 : home2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 hidden sm:flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className="w-1 h-1 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-1 h-1 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-1 h-1 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-1 h-1 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-1 h-1 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 hidden md:flex items-center justify-center h-[75vh] md:h-full px-1 md:px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 group-focus:ring-1 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">{t("previous")}</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 hidden md:flex items-center justify-center h-[75vh] md:h-full px-1 md:px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 group-focus:ring-1 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">{t("next")}</span>
        </span>
      </button>
      <div className="absolute top-0 h-[75vh] md:min-h-screen flex flex-col md:gap-5 gap-10 justify-center items-start text-light left-0 px-8 md:left-32 huge:left-52">
        <h1 className="font-accent mt-4 md:mt-0 text-4xl md:text-5xl huge:text-7xl">
          <span className="font-accentMedium">CLO</span> | CORNU LABAT OTÁLVARES
        </h1>
        {/* <hr className="grow h-2" /> */}
        <p className=" w-3/4 md:w-2/3 text-lg md:text-base huge:text-2xl">
          {t("slogan")}
        </p>
        <button className="transition rounded-full bg-accent py-3 px-6 md:py-2 md:px-4 huge:py-4 huge:px-8 drop-shadow-md hover:translate-x-1 hover:translate-y-1 hover:bg-slate-500">
          <a
            href="#contact"
            className="text-[16px] sm:text-xs huge:text-2xl flex justify-center items-center"
          >
            {t("cta_principal")}
            <div className="w-6 md:w-4 huge:w-6 ml-2 huge:ml-4">
              <img
                className="w-full -scale-x-100"
                src={telefono}
                alt="icono de telefono"
              />
            </div>
          </a>
        </button>
      </div>
    </div>
  );
}
