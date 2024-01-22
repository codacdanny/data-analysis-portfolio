import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import hero from "../assets/header.svg";
import Nav from "./Nav";
const Header = () => {
  return (
    <Box height="100svh">
      <Nav />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        padding="3rem"
        width="100%"
        gap="4rem">
        <Box>
          <Heading fontSize="3rem" fontWeight="700">
            Elevate Your Data Experience with Nwekwo
          </Heading>
          <Text marginY="2rem" fontWeight="300" fontSize="1.2rem" width="85%">
            Welcome to Nwekwo's world of data insights. Uncover meaningful
            patterns, make informed decisions, <br /> and transform your data
            into a strategic asset.
          </Text>
          <Button
            padding="1.5rem 4rem"
            bgColor="#6c63ff"
            color="white"
            colorScheme="messenger"
            borderRadius="9px">
            Learn More
          </Button>
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
