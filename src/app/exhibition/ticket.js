import { getAllReport } from "@/firebase/functions";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// import Imgh from "@/assets/Tick.svg";

const VerifyTicket = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [result, setResult] = useState(false);
  const [robj, Robj] = useState();

//   useEffect(() => {
//     if (id) {
//       getAllReport().then((res) =>
//         res.map((item) => {
//           if (item.id === id) {
//             setResult(true);
//             Robj(item);
//           }
//         })
//       );
//     }
//   }, [id]);

  console.log(robj);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Tick SVG Image */}
      {result && (
        <></>
        // <Image
        //   width={300}
        //   height={300}
        //   src={Imgh} // Adjust the path as needed
        //   alt="Tick"
        //   className=" text-green-500 mb-4"
        // />
      )}

      {/* Prescription Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {result ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Prescription Details</h2>
            <p>
              <strong>Verified:</strong> prescribed by{" "}
              <strong>{robj.name}</strong>
            </p>
            <p>
              <strong>to:</strong> {robj.title}
            </p>
            <p>
              <strong>on date: </strong> {robj.date}
            </p>
            <p>
              <strong>Medicines:</strong> {robj.medicine}
            </p>
            <p>
              <strong>Remark:</strong> {robj.remark}
            </p>
          </div>
        ) : (
          <div className="text-center text-red-500">
            <p className="text-2xl font-bold">Not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyTicket;
