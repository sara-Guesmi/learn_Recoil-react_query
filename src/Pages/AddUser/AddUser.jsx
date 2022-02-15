import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Box } from "rebass";
import { addUser } from "../../api";
import Container from "../../Components/Container";
import UserForm from "../../Components/UserForm";

const AddUser = () => {
  const navigate = useNavigate();

  const { mutateAsync, isLoading: isMutating } = useMutation(addUser);

  const onFormSubmit = async (newUser) => {
    await mutateAsync(newUser);
    navigate("/");
  };

  return (
    <Box padding={"2% 10%"}>
      <h1>Add a New User:</h1>
      <Container>
        <UserForm onFormSubmit={onFormSubmit} isLoading={isMutating} />
      </Container>
    </Box>
  );
};

export default AddUser;
