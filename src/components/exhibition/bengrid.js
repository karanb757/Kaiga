import React, { useEffect, useState } from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { getAllExhibition } from "@/firebase/functions";

export function BentoGridDemo() {
  const [allFrames, setAllFrames] = useState([]);
  const getAllFrames = async () => {
    const allExhibitions = await getAllExhibition();
    let arr = [];
    allExhibitions.map((item) => {
      let obj = {
        id: item.id,
        title: item.title,
        description: item.description,
        header: <Skeleton img={item.imageURL} />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      };
      arr.push(obj);
    });
    return arr;
  };

  useEffect(() => {
    getAllFrames().then((item) => setAllFrames(item));
  }, []);

  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {allFrames.map((item, i) => (
        <BentoGridItem
          link={`/exhibition/id?id=${item.id}`}
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ img }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <img className="w-full" src={img} />
  </div>
);

const items = [
  {
    id: 1,
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <Skeleton
        img={
          "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_1280.png"
        }
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 51,
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <Skeleton
        img={"https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg"}
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image: "",
  },
  {
    id: 45,
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Skeleton
        img={
          "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711929600&semt=sph"
        }
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: "",
  },
  {
    id: 78,
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <Skeleton
        img={"https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"}
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    image: "",
  },
  {
    id: 96,
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <Skeleton
        img={
          "https://4.imimg.com/data4/FW/EM/MY-3610322/two-ladies-500x500.jpg"
        }
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    image: "",
  },
  {
    id: 789,
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <Skeleton
        img={
          "https://mylands.com/cdn/shop/articles/Thomas_Gainsborough_s_Cornard_Wood_on_loan_from_The_National_Gallery_on_show_alongside_Study_for_Conard_Wood_and_other_drawings_reattributed_to_Gainsborough_lent_by_Her_Majesty_The_Qu.jpg?v=1633518007"
        }
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    image: "",
  },
  {
    id: 659,
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: (
      <Skeleton
        img={"https://www.1st-art-gallery.com/media/wysiwyg/back-mob-min2.jpg"}
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    image: "",
  },
];
