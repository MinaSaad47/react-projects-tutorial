import React from "react";
import {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
} from "../store/apis/albumsApi";

import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" items={3} />;
  } else if (error) {
    content = <div className="text-red-600">{error}</div>;
  } else {
    content = data.map((album) => (
      <AlbumListItem key={album.id} album={album} />
    ));
  }
  console.log(content);

  return (
    <div>
      <div className="m-2 flex flex-row justify-between items-center">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button
          loading={results.isLoading}
          rounded
          className="text-green-600 mb-1"
          onClick={handleAddAlbum}>
          + Add album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
