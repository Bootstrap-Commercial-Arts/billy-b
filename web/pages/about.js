import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import aboutimage from "../public/image/About-Hero 2.jpg";
import aboutimageone from "../public/image/aboutone.jpg";
import aboutimagetwo from "../public/image/abouttwo.jpg";
import aboutimagethree from "../public/image/aboutthree.jpg";
import aboutimagefour from "../public/image/aboutfour.jpg";

const About = () => {
  return (
    <div>
      <Head>
        <title>Billy B About Page</title>
      </Head>
      <Image src={aboutimage} />
      <div className="bg-mediumgreen h-28 -mt-2">
        <h3 className="text-4xl pt-4 text-center align-middle">
          Trusted Educational Experience
        </h3>
      </div>

      <div className="bg-darkblue flex flex-wrap justify-center pt-8 ">
        <div className="border-2 w-2/5 h-36 text-center m-2">
          <p className="text-6xl text-white pt-4">40+</p>
          <span className="uppercase text-white font-light">
            years performing
          </span>
        </div>
        <div className="border-2 w-2/5 h-36 text-center m-2">
          <p className="text-6xl text-white pt-4">51</p>
          <span className="uppercase text-white font-light">
            States & territories
          </span>
        </div>
        <div className="border-2 w-2/5 h-36 text-center m-2">
          <p className="text-6xl text-white pt-4">9</p>
          <span className="uppercase text-white font-light">
            Original Albums
          </span>
        </div>
        <div className="border-2 w-2/5 h-36 text-center m-2">
          <p className="text-6xl text-white pt-4">2+</p>
          <span className="uppercase text-white font-light">
            Million students
          </span>
        </div>
      </div>

      <div className="bg-darkblue pt-12 pb-12">
        <p className="w-10/12 ml-auto mr-auto text-white leading-7">
          Billy is a dynamic songwriter and performer who has been commissioned
          to create stage shows, produce albums of original music, and star in
          video projects for prominent environmental organizations such as the
          National Geographic Society, The World Wildlife Fund, Project Learning
          Tree, The Cleveland Museum of Natural History, Baltimore Woods Nature
          Center and the France and Merrick Foundations. He has performed on big
          stages such as The Wolf Trap Filene Center, The Kennedy Center
          Eisenhower Hall, Center Stage Central Park NYC, and performed in other
          notable venues such as the White House, 92nd Street Y, Smithsonian,
          MSC OPAS at Texas A&M, Oakland Museum of California, the Sanger
          Theater of Mobile and many others.
        </p>
        <br />
        <p className="w-10/12 ml-auto mr-auto text-white leading-7">
          His performances have taken him to 48 states and three Provinces in
          Canada where he has keynoted hundreds of conferences, festivals and
          thousands of schools. Billy B.’s lively song, dance and stories have
          both educated and entertained educators, children, and even two
          American Presidents. He has released 9 albums of original music, most
          of which involve original songs about the ecosystems and critters on
          our beautiful planet.
        </p>
        <br />
        <p className="w-10/12 ml-auto mr-auto text-white leading-7">
          His two newest shows are “Weather, Climate, Let’s Define It”, and “The
          Salish Sea With Billy B”. During the recent ‘Covid Times’ he performed
          72 virtual shows using the “Green Screen” platform, which allowed him
          to stand in front of, and interact with, the ecosystems and critters
          that were the subject of his songs.
        </p>
        <br />
        <p className="w-10/12 ml-auto mr-auto text-white leading-7">
          He now lives in “The Great Northwest”, Port Townsend Washington, where
          he scuba dives and continues to create and perform, in person and
          virtually.
        </p>
      </div>
      {/* websites */}
      <div className="bg-darkblue">
        <div>
          <div className="w-11/12 ml-auto mr-auto">
            <a href="#">
              <Image src={aboutimageone} />
            </a>
            <p className="text-white uppercase text-right">visit website</p>
          </div>
          <div className="w-11/12 ml-auto mr-auto text-white py-4">
            <h4 className="text-2xl">World Wildlife Foundation</h4>
            <h5 className="font-extralight italic">Since 1989</h5>
            <p className="mt-8 leading-7 font-extralight">
              Commissioned a recording of songs for ” Biodiversity and Billy B
              “, and to act in videos, all of which ended up being part of their
              “Biodiversity 911″ project, a traveling exhibition by WWF. A live
              show was also commissioned ” Bio, Bio, Biodiversity “, which Billy
              has now performed hundreds of times all over the country.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-darkblue pt-24">
        <div>
          <div className="w-11/12 ml-auto mr-auto">
            <a href="#">
              <Image src={aboutimagetwo} />
            </a>
            <p className="text-white uppercase text-right">visit website</p>
          </div>
          <div className="w-11/12 ml-auto mr-auto text-white py-4">
            <h4 className="text-2xl">National Geographic</h4>
            <h5 className="font-extralight italic">Since 1992</h5>
            <p className="mt-8 leading-7 font-extralight">
              Multiple performances at The National Geographic Headquarters in
              Washington DC. Original song commisioned for “BioBlitz”; recorded,
              produced, and performed live twice for National Geographic.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-darkblue pt-24">
        <div>
          <div className="w-11/12 ml-auto mr-auto">
            <a href="#">
              <Image src={aboutimagethree} />
            </a>
            <p className="text-white uppercase text-right">visit website</p>
          </div>
          <div className="w-11/12 ml-auto mr-auto text-white py-4">
            <h4 className="text-2xl">Smithsonian</h4>
            <h5 className="font-extralight italic">Since 1984</h5>
            <p className="mt-8 leading-7 font-extralight">
              Performed at The National Zoo, The American Art Museum, The
              Natural History Museum, The Folklife Festival, and The Discovery
              Theater.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-darkblue pt-24">
        <div>
          <div className="w-11/12 ml-auto mr-auto">
            <a href="#">
              <Image src={aboutimagefour} />
            </a>
            <p className="text-white uppercase text-right">visit website</p>
          </div>
          <div className="w-11/12 ml-auto mr-auto text-white py-4">
            <h4 className="text-2xl">Project Learning Tree</h4>
            <h5 className="font-extralight italic">Since 1995</h5>
            <p className="mt-8 leading-7 font-extralight">
              Performed for PLT at many national conferences and regional
              workshops. Three award winning recordings and a video compilation
              have also been released.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
