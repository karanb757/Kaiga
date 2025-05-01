import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Lottie from "lottie-react";
import { useState } from "react";
import animationData from "@/assets/lottie/imageUpload.json";
import { Textarea } from "./ui/textarea";
import { saveExhibition } from "@/firebase/functions";
import Loader from "./loader";
import { AiFillDelete } from "react-icons/ai";

export function ExhibitionPopUp() {
  const [alertStatus, setAlertStatus] = useState("danger");
  const [fields, setFields] = useState(false);
  const [msg, setMsg] = useState(null);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);

  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try AGain 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !imageAsset || !price || !description) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          description: description,
          price: price,
        };
        saveExhibition(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setDescription("")
    setPrice(null)
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Exhibition</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Exhibition</AlertDialogTitle>
          <div className="w-full border border-gray-300 rounded-lg p-4 flex flex-col justify-center gap-4 md:max-h-[80vh] overflow-auto">
            {fields && (
              <p
                className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                  alertStatus === "danger"
                    ? "bg-red-400 text-red-800"
                    : "bg-emerald-400 text-emerald-800"
                }`}
              >
                {msg}
              </p>
            )}

            <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {!imageAsset ? (
                    <>
                      <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          {/* <p className="text-gray-500 hover:text-gray-700">
                          Click here to upload
                        </p> */}

                          <Lottie animationData={animationData} />
                        </div>
                        <input
                          type="file"
                          name="uploadimage"
                          accept="image/*"
                          onChange={uploadImage}
                          className="w-0 h-0"
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="relative h-full">
                        <img
                          src={imageAsset}
                          alt="uploaded image"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                          onClick={deleteImage}
                        >
                          <AiFillDelete className=" text-white" />
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give me a title..."
                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>

            <div className="w-full border rounded-lg">
              <Textarea
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className=" w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>

            <div className=" w-full border border-grey-300 p-4 rounded-lg">
              <input
                type="text"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price in Rupees"
                className=" border border-gray-300 w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              />
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={saveDetails}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
