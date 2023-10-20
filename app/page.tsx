import { Navbar } from "./components/navbar";
import { Products } from "./components/products";
import GamingImage from "../images/gamming.jpg";
import MovieImage from "../images/movie.jpg";
import MangaAnime from "../images/Manga & Anime.jpeg";
import Fantasy from "../images/Fantasy.jpg";
import TvShow from "../images/TvShow.jpg";
import Sports from "../images/Sport.jpg";
import Music from "../images/Music.jpg";
import Nature from "../images/Nature.jpg";
import Travel from "../images/Travel.jpg";
import Cars from "../images/Cars.jpg";
import Animals from "../images/Animals.jpg";
import Space from "../images/Space.jpg";

import Image from "next/image";
import HeroPoster from "../images/HeroPoster.png"
import { Car } from "lucide-react";

const data = [
  
  {
    imageSrc: GamingImage,
    title: 'Gamming',
    width: 376,
    height: 256,
  },
  {
    imageSrc: MovieImage,
    title: 'Movie',
    width: 376,
    height: 256,
  },
  {
    imageSrc: MangaAnime,
    title: 'Anime',
    width: 376,
    height: 256,
  },
  {
    imageSrc: Fantasy,
    title: 'Fantasy',
    width: 376,
    height: 256,
  },{
    imageSrc: TvShow,
    title: 'TV Shows',
    width: 376,
    height: 256,
  },
  {
    imageSrc: Sports,
    title: 'Sports',
    width: 376,
    height: 256,
  },
  {
    imageSrc: Music,
    title: 'Music',
    width: 376,
    height: 256,
  },
  {
    imageSrc: Nature,
    title: 'Nature',
    width: 376,
    height: 256,
  },
  {
    imageSrc: Travel,
    title: 'Travel',
    width: 376,
    height: 256,
  },
  {
    imageSrc: Cars,
    title: 'Cars',
    width: 376,
    height: 256,
  },
  {
    imageSrc: Animals,
    title: 'Animals',
    width: 376,
    height: 256,
  },
  {
    imageSrc: Space,
    title: 'Space',
    width: 376,
    height: 256,
  },
];


export default function Page() {
  return (
    <>
      <Navbar></Navbar>
      {/* herosection */}
      <div className="rounded-lg bg-gray-200 p-4 m-5">
        <Image
          className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
          src={HeroPoster}
          alt=""
        />
      </div>
      <h2 className="text-2xl underline mt-10 text-center font-bold">
        Products
      </h2>
      <div className="mt-5">
        {/* <h2 className="px-2 mx-10">Category #1</h2> */}
        <Products></Products>
      </div>
      

      {/* catgeory  */}
      <div>
      <h2 className="text-2xl underline mt-10 text-center font-bold">Still looking for a match?</h2>

      <div className="mx-auto w-full max-w-[90%] items-center flex flex-wrap gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative aspect-[1/1]  w-auto rounded-md md:aspect-[3/2] md:h-[120px]"
          >
            <Image
              src={item.imageSrc}
              width={item.width}
              height={item.height}

              alt=""
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 rounded-md"></div>
            <div className="absolute left-1/2  transform translate-x-[-50%] top-1/2 translate-y-[-50%] ">
              <h1 className="text-lg font-semibold text-white bg-black opacity-60 p-2 rounded-md">{item.title}</h1>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
