import { Input, Label } from "@rebass/forms";
import { useForm } from "react-hook-form";
import { CradleLoader } from "react-loader-spinner";
import { Box, Button } from "rebass";

const UserForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, watch } = useForm({ defaultValues });
  const onSubmit = (e) => {
    onFormSubmit(watch());
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <Box>
        <Label>Name:</Label>
        <Input
          {...register("name", { required: true })}
          id="name"
          name="name"
          type="text"
        />
      </Box>
      <Box>
        <Label>UserName:</Label>
        <Input
          {...register("username", { required: true })}
          id="username"
          name="username"
          type="text"
        />
      </Box>
      <Box>
        <Label>Email:</Label>
        <Input
          {...register("email", { required: true })}
          id="email"
          name="email"
          type="email"
        />
      </Box>
      <Box>
        <Label>Phone:</Label>
        <Input
          {...register("phone", { required: true })}
          id="phone"
          name="phone"
          type="tel"
        />
      </Box>
      <Box>
        <Label>Website:</Label>
        <Input
          {...register("website", { required: true })}
          id="website"
          name="website"
          type="text"
        />
      </Box>
      <Button variant="primary" mr={2}>
        {isLoading ? (
          <CradleLoader type="ThreeDots" color="#fff" height={10} />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default UserForm;
