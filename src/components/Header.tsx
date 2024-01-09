import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import hero from "../assets/header.svg";
import Nav from "./Nav";
const Header = () => {
  return (
    <Box height="100svh">
      <Nav />
      <Flex alignItems="center" justifyContent="space-between" padding="3rem">
        <Box>
          <Heading marginY="3rem">Data Analysis with Nwekwo</Heading>
          <Text marginY="2rem">
            Welcome to Nwekwo's site. Lorem ipsum dolor sit amet consectetur,
          </Text>
          <Button>Learn More</Button>
        </Box>
        <Box>
          <Image
            src={hero}
            boxSize="fit-content"
            objectFit="cover"
            alt="hero image"
            bgColor="transparent"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
