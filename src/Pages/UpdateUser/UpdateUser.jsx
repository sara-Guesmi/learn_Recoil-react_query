import React from "react";
import { CradleLoader } from "react-loader-spinner";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex } from "rebass";
import { editUser, getUser } from "../../api";
import Container from "../../Components/Container";
import UserForm from "../../Components/UserForm";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, isError } = useQuery(
    ["user", { id }],
    getUser
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(editUser);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    navigate("/");
  };

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
    <div>
      <Box padding={"2% 10%"}>
        <h1>Edit User Details:</h1>
        <Container>
          <UserForm
            defaultValues={data.data}
            onFormSubmit={onFormSubmit}
            isLoading={isMutating}
          />
        </Container>
      </Box>
    </div>
  );
};

export default UpdateUser;
