import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Card(props) {
  return (
    <div className="min-w-[250px] huge:min-w-[350px] h-[250px] huge:h-[350px] bg-dark rounded-xl relative text-center drop-shadow-md p-4">
      <div className="w-full h-[85%] bg-opacity rounded-br-full absolute top-0 right-0 left-0 bottom-0">
        <div className="flex flex-col items-center gap-2 ">
          <img
            className="w-32 huge:w-52 h-32 huge:h-52 rounded-lg shadow-lg mt-6 mb-4 huge:mt-10"
            src={props.img}
            alt="Bonnie image"
          />
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="text-light relative group huge:text-lg"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#F5F5F5" }}
              className="mr-2"
            />
            | {props.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 mt-2 bg-accent transition-all group-hover:w-full"></span>
          </a>
          <p className="text-light ">{props.category}</p>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
};
