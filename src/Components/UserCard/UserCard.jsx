import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from "rebass/styled-components";
import { removeUser } from "../../api";
import { LineWave } from "react-loader-spinner";

const UserCard = ({ user: { name, email, username, id } }) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(removeUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users").then(alert("deleted succuss"));
    },
  });

  const remove = () => {
    mutate(id);
  };
  return (
    <div>
      <Flex
        justifyContent="space-around"
        key={id}
        p={3}
        width="100%"
        alignItems="center"
      >
        <StyledLink>{name + username}</StyledLink>
        <Text width={200}>{email}</Text>
        <StyledLink as={Link} to={`/editUser/${id}`}>
          <Button id="btn_remove">Edit</Button>
        </StyledLink>
        <Button onClick={remove} id="btn_remove">
          {isLoading ? (
            <LineWave color="blue" ariaLabel="three-circles-rotating" />
          ) : (
            "Remove"
          )}
        </Button>
      </Flex>
    </div>
  );
};

export default UserCard;
