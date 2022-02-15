import React from "react";
import { Flex, Box, Link as StyledLink, Image } from "rebass/styled-components";
import { Link as RouterLink } from "react-router-dom";
import Container from "../Container";
import logo from "../../assets/logo.png";
import { useRecoilState } from "recoil";
import { authState } from "../../store/auth";
import "./Navbar.css";
const Navbar = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const handelLogout = () => {
    setAuth({ isAuth: false, user: null });
  };
  return (
    <div>
      <Flex bg="black" color="white" justifyContent="center" padding={10}>
        <Container>
          <Flex px={4} width="100%" alignItems="center">
            <Image size={20} src={logo} />
            <StyledLink as={RouterLink} variant="nav" to="/">
              React Query CRUD
            </StyledLink>
            <Box mx="auto" />
            <Box></Box>
            <StyledLink as={RouterLink} variant="nav" to="/addUser">
              + Add new User
            </StyledLink>
            {auth.isAuth ? (
              <Box id="auth_bloc">
                <StyledLink
                  as={RouterLink}
                  variant="nav"
                  to="/"
                  onClick={handelLogout}
                >
                  Logout
                </StyledLink>
                <div id="user_info_bloc">
                  <Image
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                    variant="avatar"
                  />
                  <div id="user_info_navbar">
                    <p>"hello</p>
                  </div>
                </div>
              </Box>
            ) : (
              <StyledLink as={RouterLink} variant="nav" to="/signin">
                Login
              </StyledLink>
            )}
          </Flex>
        </Container>
      </Flex>
    </div>
  );
};

export default Navbar;
