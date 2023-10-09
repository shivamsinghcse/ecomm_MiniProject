import { Navbar } from "./components/navbar";
import { Products } from "./components/products";

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
      <h2 className="text-2xl underline mt-10 text-center font-bold">
      Category
      </h2>

      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Nike Airmax v2</h1>
            <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
