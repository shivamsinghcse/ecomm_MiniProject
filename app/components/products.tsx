import React from 'react'
import Image from 'next/image';
const products = [
  {
    image: 'https://static.displate.com/857x1200/displate/2022-03-15/08f93a1eaa3a198c1617294724880598_0626f8c5c65ce94a48b42b827a02fd6a.jpg',
    name: 'Assassin',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Assassin', '#Anime', '#Hero'],
    // colors: ['red', 'purple', 'orange'],
    sizes: ['45x32', '67.5x48', '90x64'],
    height: 1144,
    width: 817
  },
  {
    image: 'https://static.displate.com/857x1200/displate/2023-05-07/5c7b5bd2219ad69a1adb8de2f5b3da43_32c8fad734446c0f663a67c5b20c479b.jpg',
    name: 'The Great Wave of Coffee',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Wave', '#Cup', '#Coffie'],
    // colors: ['red', 'purple', 'orange'],
    sizes: ['45x32', '67.5x48', '90x64'],
    height: 1144,
    width: 817
  },
  {
    image: 'https://static.displate.com/857x1200/displate/2023-09-06/69f1ff6f1bbba673d562eb5021de1539_cd4b2c75083a4226a3a7ab43ac2ae60b.jpg',
    name: 'Journey into the Starfield',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Star', '#Astronaut', '#Space'],
    // colors: ['red', 'purple', 'orange'],
    sizes: ['45x32', '67.5x48', '90x64'],
    height: 1144,
    width: 817
  },
  {
    image: 'https://static.displate.com/857x1200/displate/2022-12-15/bd53981eac222367d116b5040dc0b582_cf8dc107f846e4ff94c54603dd8ae3ef.jpg',
    name: 'gojo satoru',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#gojo', '#jujutsukaisen', '#Anime'],
    // colors: ['red', 'purple', 'orange'],
    sizes: ['45x32', '67.5x48', '90x64'],
    height: 1144,
    width: 817
  },
  {
    image: 'https://static.displate.com/857x1200/displate/2023-04-19/a10b29a74c11f350368682f21b346321_0bf3703beff1d1bd9df25ab4a41755c8.jpg',
    name: 'StarWars',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#StarWars', '#Marvel', '#Movie'],
    // colors: ['red', 'purple', 'orange'],
    sizes: ['45x32', '67.5x48', '90x64'],
    height: 1144,
    width: 817
  },
  {
    image: 'https://static.displate.com/857x1200/displate/2021-03-12/db7c43da590c03fbd0043b16f820f013_67eedab559952339e7836cf07d2d5a97.jpg',
    name: 'Planet Earth',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Earth', '#planet', '#artwork'],
    // colors: ['red', 'purple', 'orange'],
    sizes: ['45x32', '67.5x48', '90x64'],
    height: 1144,
    width: 817
  },
];

export function Products() {
  return (
    <div className="mx-auto grid w-full max-w-[90%] items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 overflow-y-scroll ">
       <div className="mt-5 flex gap-7 w-full">
        {/* <h2 className="px-2 mx-10">Category #1</h2> */}
        {products.map((product, index) => (
  <div key={index} className="rounded-md border">
    <img
      src={product.image}
      alt={product.name}

      className="w-full object-cover rounded-md md:aspect-auto md:h-[400px] lg:h-[300px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">{product.name}</h1>
      {/* <p className="mt-3 text-sm text-gray-600">{product.description}</p> */}
      <div className="mt-4">
        {product.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {tag}
          </span>
        ))}
      </div>
      {/* <div className="mt-3 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Colors : </span>
        {product.colors.map((color, colorIndex) => (
          <span key={colorIndex} className={`block h-4 w-4 rounded-full border-2 border-gray-300 bg-${color}-400`}></span>
        ))}
      </div> */}
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Size: </span>
        {product.sizes.map((size, sizeIndex) => (
          <span key={sizeIndex} className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            {size}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
))}
      </div>
    </div>
  )
}
