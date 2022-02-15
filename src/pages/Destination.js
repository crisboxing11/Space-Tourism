import { useState } from "react";
import data from "../Style/assets/data.json";

const Destination = () => {
const [planets] = useState(data.destinations);
const [value, setValue] = useState(0);
const { name, images, description, distance, travel } = planets [value];
return (
  <>
    <section className="home destination">
      <div className="px-5 pt-32 grid grid-cols-1 gap-5 md:grid-cols-2 gap-10 xl:max-w-7xl xl:mx-auto">
        <article className="pt-10 xl:pt-32 text-center md:text-left">
          <h2 className="text-white text-3xl font-extralight text-gray-300 uppercase tracking-wider pb-10">
            01
            <span className="ml-5 font-bold">Destination</span>
          </h2>
          <img
            src={images.png}
            alt={name}
            title={name}
            className="block mx-auto"
          />
        </article>
      </div>
    </section>
  </>
);
};

export default Destination;
