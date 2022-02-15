import React from "react";
import { CradleLoader } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Flex } from "rebass";
import { getAllUsers } from "../../api";
import Container from "../../Components/Container";
import UserCard from "../../Components/UserCard/UserCard";

const UserList = () => {
  const {
    data: users,
    error,
    isLoading,
    isError,
  } = useQuery("users", getAllUsers);

  if (isLoading) {
    return (
      <Container>
        <Flex>
          <CradleLoader />
        </Flex>
      </Container>
    );
  }
  if (isError) {
    return <span>Error: {error}</span>;
  }
  return (
    <Container>
      <h3>User List:</h3>
      {users.data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  );
};

export default UserList;
