import React from "react";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UserListItem({ user }) {
  const [doRemoveUser, isRemoveUserLoading, removeUserError] =
    useThunk(removeUser);

  const handleRemoveUser = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button
        rounded
        loading={isRemoveUserLoading}
        onClick={handleRemoveUser}
        className="mr-2 text-red-600">
        <GoTrash />
      </Button>
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
