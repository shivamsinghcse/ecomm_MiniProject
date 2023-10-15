import { Navbar } from "./components/navbar";
import { Products } from "./components/products";
import GamingImage from "../images/gamming.jpg";
import MovieImage from "../images/movie.jpg"
import Image from "next/image";

const data = [
  
  {
    imageSrc: GamingImage,
    title: 'Gamming',
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
        <img
          className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <h2 className="text-2xl underline mt-10 text-center font-bold">
        Products
      </h2>
      <div className="mt-5">
        <h2 className="px-2 mx-10">Category #1</h2>
        <Products></Products>
      </div>
      <div className="mt-5">
        <h2 className="px-2 mx-10">Category #2</h2>
        <Products></Products>
      </div>
      <div className="mt-5">
        <h2 className="px-2 mx-10">Category #3</h2>
        <Products></Products>
      </div>


      {/* catgeory  */}
      <div>
      <h2 className="text-2xl underline mt-10 text-center font-bold">Category</h2>

      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative aspect-[1/1]  w-auto rounded-md md:aspect-auto md:h-[200px]"
          >
            <Image
              src={item.imageSrc}
              width={item.width}
              height={item.height}

              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 rounded-md"></div>
            <div className="absolute left-1/2  transform translate-x-[-50%] top-1/2 translate-y-[-50%] ">
              <h1 className="text-lg font-semibold text-white bg-black opacity-50 p-2 rounded-md">{item.title}</h1>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
