import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";
import PhotoListItem from "./PhotoListItem";
import Button from "./Button";

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResult] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="w-full h-8" items={4} />;
  } else if (error) {
    content = <div>Error fetching photos: {error}</div>;
  } else {
    content = data.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ));
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        Photos in {album.name}
        <Button
          className="text-green-600"
          rounded
          onClick={handleAddPhoto}
          loading={addPhotoResult.isLoading}>
          + Add photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
