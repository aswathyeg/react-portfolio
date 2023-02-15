import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import photo from "../assets/photo.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0d195f]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Over the past 2 years experience in front end development, I have
            done a handful of projects in React. I am doing reguler cotributions
            to Github.Sharing my technical knowledge in Medium is my other
            interest.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={photo}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
