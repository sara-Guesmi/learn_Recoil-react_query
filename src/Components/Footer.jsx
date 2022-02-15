import React from "react";
import { Flex, Link as StyledLink, Image } from "rebass/styled-components";
import Container from "./Container";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Flex bg="black" color="white" justifyContent="center" padding={10}>
        <Container>
          <Flex px={4} width="100%" alignItems="center" justifyContent="center">
            <Image
              size={20}
              src="https://pngset.com/images/peace-emoji-victoire-emoji-hand-fist-transparent-png-603720.png"
            />
            <StyledLink as={RouterLink} variant="nav" to="/">
              Copy right 2022 Sarra
            </StyledLink>
          </Flex>
        </Container>
      </Flex>
    </footer>
  );
};

export default Footer;
