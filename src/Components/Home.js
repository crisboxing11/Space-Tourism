import React from 'react';
import { Link } from "react-router-dom";;

const Home = () => {
  return (
    <section className="home">
      <div className="overlay p-10">
        <article className="text-center md:text-left">
          <h1 className="text-gray-400 text-xl uppercase title">
            SO, YOU WANT TO TRAVEL TO{" "}
            <span className="block font-semibold tracking-widest text-4xl text-white md:text-5xl lg:text-6xl 2xl:text-7xl mb-10 mt-3">
              SPACE
            </span>
          </h1>
          <p className=" md:w-11/12 lg:w-1/2">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <article>
          <button className="bg-white text-gray-900 font-bold uppercase text-2xl w-40 h-40 rounded-full shadow xl:h-52 xl:w-52 xl:text-4xl animate-pulse mt-10 md:mt-0">
            <Link to="/destination" className="explore">
              EXPLORE
            </Link>
          </button>
        </article>
      </div>
    </section>
  );
}

export default Home;
