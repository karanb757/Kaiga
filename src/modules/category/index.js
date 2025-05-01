import React from "react";
import { categories } from "@/utils/data";
import MarvelImg from "@/assets/img/marvel.jpg";
import Anime from "@/assets/img/anime.jpg";
import Models from "@/assets/img/roll models.webp";
import Bollywood from "@/assets/img/bollywood.jpg";
import Link from "next/link";
import Image from "next/image";
import { CardHoverEffectDemo } from "./card";

const CategoryPage = () => {
  return (
    <div>
      {/* <div>
        {categories && categories.map((item)=>(
          <div key={item.id}>{item.name}</div>
        )) }
      </div> */}
      <p className="text-[2rem] mt-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-lightPink to-lightViolet font-semibold">
        Categories
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default CategoryPage;

// <div className="flex gap-4 flex-wrap md:flex-row flex-col relative items-center justify-center w-full">
// <Link href="/category/bollywood">
//   <div className="image-container mt-10">
//     <Image
//       width={1080}
//       height={1080}
//       layout="responsive"
//       src={Bollywood}
//       className="grayscale cursor-pointer transition duration-300 ease-in-out transform hover:grayscale-0"
//       alt="Bollywood"
//     />{" "}
//     <p className="text-center mt-4 text-xl font-semibold">Bollywood</p>
//   </div>
// </Link>

// <Link href="/category/marvel">
//   <div className="image-container mt-10">
//     <Image
//       width={1080}
//       height={1080}
//       src={MarvelImg}
//       className="md:w-[350px] w-full grayscale cursor-pointer transition duration-300 ease-in-out transform hover:grayscale-0"
//       alt=""
//     />
//     <p className="text-center mt-4 text-xl font-semibold">Marvel</p>
//   </div>
// </Link>

// <Link href="/category/anime">
//   <div className="image-container mt-10">
//     <Image
//       width={1080}
//       height={1080}
//       src={Anime}
//       className="grayscale cursor-pointer transition duration-300 ease-in-out transform hover:grayscale-0"
//       alt=""
//     />
//     <p className="text-center mt-4 text-xl font-semibold">Anime</p>
//   </div>
// </Link>

// <Link href="/category/model">
//   <div className="image-container mt-10">
//     <Image
//       width={1080}
//       height={1080}
//       src={Models}
//       className="grayscale w-[350px] cursor-pointer transition duration-300 ease-in-out transform hover:grayscale-0"
//       alt=""
//     />{" "}
//     <p className="text-center mt-4 text-xl font-semibold">
//       Role Models
//     </p>
//   </div>
// </Link>
// </div>
