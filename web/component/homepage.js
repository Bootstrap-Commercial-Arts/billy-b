import React, { Fragment } from "react";
import Image from "next/image";
import abouthero from "../public/image/About-Hero.jpg";
import storeimage from "../public/image/Store-Hero.jpg";
import educatiionimage from "../public/image/Billy B sExplains leaves 1 png.png";

const Homepage = () => {
  return (
    <Fragment>
      <div>
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          className="w-screen h-64"
        ></iframe>
        <p className="w-11/12  ml-auto mr-auto mt-2 leading-7">
          Since 1977 Bill Brennan (a.k.a. “Billy B.”) has electrified children,
          parents, and teachers alike with his exciting, unique style of
          combining environmental education and entertainment. Billy B., a
          trained educator turned performer, uses songs and dances which he
          writes and choreographs himself to teach children of all ages about
          the wonders of natural science, ecology and the environment. Kids have
          taught Billy they want to do two things; move and make noise. So
          Billy’s live shows and his recorded music all encourage audience
          participation.
        </p>
        <div className="w-4/5 ml-auto mr-auto my-12">
          <q className="text-4xl text-darkblue">
            Educators call it kinetic learning. Kids call it fun.
          </q>
        </div>
        <p className="w-11/12  ml-auto mr-auto mt-2 leading-7">
          Billy B. has performed for more than 2 million children the United
          States and Canada, teaching children a large spectrum of environmental
          topics, from arthropods, alligators, and owls to complex scientific
          phenomena such as photosynthesis, pollination, the grinding of the
          earth’s tectonic plates, and erosion. In addition to teaching
          elementary and middle school children environmental science through
          song and dance, Billy B. also performs for primary and preschool
          students with both songs about nature and songs dealing with common
          courtesy, self help and life at school.
        </p>
      </div>
      <div>
        <div className="mt-4">
          <h3 className="uppercase h-12 leading-10 text-lg text-center bg-lightyellow">
            resume/about
          </h3>
          <Image src={abouthero} />
          <div className="bg-darkyellow py-8 -mt-2">
            <p className="w-9/12 ml-auto mr-auto">
              Learn about Billy B's music and unique interaction with live
              performance backdrops that has earned him a stellar reputation in
              46 States and 3 Canadian Provinces. Find out why numerous
              scientific and educational organizations choose Billy B to educate
              and entertain children of all ages!
            </p>
            <div className="text-center mt-4">
              <button className="uppercase bg-lightyellow px-8 rounded-full ml-auto mr-auto">
                read more
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="uppercase h-12 leading-10 text-lg text-center bg-lightpink">
            videos
          </h3>
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="w-screen h-64"
          ></iframe>
          <div className="bg-darkpink py-8 -mt-2">
            <p className="w-9/12 ml-auto mr-auto">
              Watch past shows, music videos, and other educational videos from
              Billy B's Youtube channel to get a taste of the songs, dances,
              theatrical backdrops and improv comedy he uses to reach and teach
              his audiences about the wonderful workings of our beautiful
              planet.
            </p>
            <div className="text-center mt-4">
              <button className="uppercase bg-lightpink px-8 rounded-full ml-auto mr-auto">
                see more
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="uppercase h-12 leading-10 text-lg text-center bg-lightgreen">
            store
          </h3>
          <Image src={storeimage} />
          <div className="bg-darkgreen py-8 -mt-2">
            <p className="w-9/12 ml-auto mr-auto">
              Find great gifts and mementos like tote bags, mugs, and shirts
              alongside CDs & digital albums by Billy B. Or, become a patron at
              Billy B's Patreon page to earn merchandise, see exclusive content,
              & give input on the shows that he is developing.
            </p>
            <div className="text-center mt-4">
              <button className="uppercase bg-lightgreen px-8 rounded-full ml-auto mr-auto">
                store shopping
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="uppercase h-12 leading-10 text-lg text-center bg-lightyellow">
            educator resources
          </h3>
          <Image src={educatiionimage} />
          <div className="bg-darkyellow py-8 -mt-2">
            <p className="w-9/12 ml-auto mr-auto">
              Billy B creates each song with both kids & educators in mind,
              which is why he's created helpful resources for teachers to use
              alongside his performances! Read, download, or print lyrics &
              teacher guides for all of Billy B's work.
            </p>
            <div className="text-center mt-4">
              <button className="uppercase bg-lightyellow px-8 rounded-full ml-auto mr-auto">
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
