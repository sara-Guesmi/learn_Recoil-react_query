import axios from "axios";

export const getAllUsers = async () => {
  const response = await axios.get("http://localhost:4000/users");
  if (response.status !== 200) {
    throw new Error("something went wrong");
  }
  return response;
};
export const getUser = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await axios.get(`http://localhost:4000/users/${id}`);
  if (response.status !== 200) {
    throw new Error("something went wrong");
  }
  return response;
};
export const removeUser = async (id) => {
  const response = await axios.delete(`http://localhost:4000/users/${id}`);
  if (response.status !== 200) {
    throw new Error("something went wrong");
  }
  return response;
};
export const editUser = async ({ id, ...rest }) => {
  const response = await axios.put(`http://localhost:4000/users/${id}`, rest);
  if (response.status !== 200) {
    throw new Error("something went wrong");
  }
  return response;
};
export const addUser = async (newUser) => {
  const response = await axios.post(`http://localhost:4000/users/`, newUser);
  if (response.status !== 201) {
    throw new Error("something went wrong");
  }
  return response;
};
