import forbes from "../assets/imgs/forbes.png";
import ambito from "../assets/imgs/ambito.png";
import lanacion from "../assets/imgs/lanacion.png";
import elcronista from "../assets/imgs/elcronista.png";

export default function Media() {
  return (
    <>
      <div className="w-full h-24 sm:h-16 huge:h-32 bg-dark p-4 md:p-12 flex  justify-between sm:justify-evenly items-center">
        <div className="w-16 md:w-24 transition duration-300 hover:scale-110">
          <a
            href="https://www.forbesargentina.com/innovacion/el-abogado-estudio-argentino-detras-corporaciones-manana-n10990"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-full" src={forbes} alt="logo forbes" />
          </a>
        </div>
        <div className="w-16 md:w-24 transition duration-300 hover:scale-110">
          <a
            href="https://www.ambito.com/negocios/comercio-exterior/keynote-un-evento-online-entender-los-desafios-del-n5150416"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-full" src={ambito} alt="logo ambito" />
          </a>
        </div>
        <div className="w-24 md:w-36 transition duration-300 hover:scale-110">
          <a
            href="https://www.lanacion.com.ar/economia/comercio-exterior/luces-y-sombras-de-las-criptomonedas-nid03062021/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-full" src={lanacion} alt="logo la nación" />
          </a>
        </div>
        <div className="w-24 md:w-36 transition duration-300 hover:scale-110">
          <a
            href="https://www.cronista.com/pyme/herramientas/crecer-con-la-mira-puesta-en-el-exterior-y-las-provincias/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-full" src={elcronista} alt="logo el cronista" />
          </a>
        </div>
      </div>
    </>
  );
}
