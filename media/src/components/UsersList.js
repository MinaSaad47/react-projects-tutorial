import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import { GoPersonAdd } from "react-icons/go";
import UserListItem from "./UserListItem";

function UsersList() {
  const [doFetchUsers, isFetchUsersLoading, fetchUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isAddUserLoading, addUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doAddUser();
  };

  let content;
  if (isFetchUsersLoading) {
    content = <Skeleton items={6} className="h-10 w-ful" />;
  } else if (fetchUsersError) {
    content = <div>Error Happend</div>;
  } else {
    content = data.map((user) => <UserListItem key={user.id} user={user} />);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button
          rounded
          className="text-green-600"
          loading={isAddUserLoading}
          onClick={handleUserAdd}>
          Add User <GoPersonAdd className="ml-2" />
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UsersList;
