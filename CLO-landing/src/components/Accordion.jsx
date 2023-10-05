import PropTypes from "prop-types";

export default function Accordion(props) {
  return (
    <div className="bg-dark w-[500px] h-fit rounded-xl relative text-center drop-shadow-md">
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        data-active-classes="bg-dark rounded-b-none"
      >
        <h2 id={`accordion-collapse-heading-${props.number}`}>
          <button
            type="button"
            className="transition bg-dark flex items-center justify-between w-full p-5 font-medium text-left text-light rounded-xl hover:bg-accent hover:text-dark border-l-8 border-accent"
            data-accordion-target={`#accordion-collapse-body-${props.number}`}
            aria-expanded="false"
            aria-controls={`accordion-collapse-body-${props.number}`}
          >
            <span className="huge:text-xl">{props.title}</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-collapse-body-${props.number}`}
          className="hidden"
          aria-labelledby={`accordion-collapse-heading-${props.number}`}
        >
          <div className="p-5 rounded-b-xl border-l-8 border-accent huge:text-lg">
            <p className="mb-2 text-gray-500">{props.parag}</p>
            <p className="mb-2 text-gray-500">{props.parag2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  parag: PropTypes.string.isRequired,
  parag2: PropTypes.string,
  number: PropTypes.number,
};
