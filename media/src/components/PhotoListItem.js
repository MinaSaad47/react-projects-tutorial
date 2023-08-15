import React from "react";
import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotoListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();

  const handlePhotoRemove = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handlePhotoRemove} className="relative cursor-pointer m-2">
      <img className="w-20 h-20" src={photo.url} alt="random photo" />
      <div className="absolute inset-0 flex items-center justify-center text-red-600 hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotoListItem;
