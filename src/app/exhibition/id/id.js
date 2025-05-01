import Loader from "@/components/loader";
import { getExhibitionById } from "@/firebase/functions";
import SingleExhibition from "@/modules/exhibition";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Id = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [exhibitionData, setExhibitionData] = useState({})

  useEffect(() => {
    getExhibitionById(id).then(data => setExhibitionData(data))
  }, [id])

  return <div>{exhibitionData ? <SingleExhibition exhibitionData={exhibitionData} /> : <Loader />}</div>;
};

export default Id;
