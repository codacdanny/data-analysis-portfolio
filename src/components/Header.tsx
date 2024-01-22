import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import hero from "../assets/header.svg";
import Nav from "./Nav";
const Header = () => {
  return (
    <Box height="100svh">
      <Nav />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        padding={{ base: "2rem", md: "3rem" }}
        gap="4rem"
        width="100%">
        <Box>
          <Heading fontSize={{ base: "2rem", md: "3rem" }} fontWeight="700">
            Elevate Your Data Experience with Ikenna
          </Heading>
          <Text
            marginY="1rem"
            fontWeight="300"
            fontSize={{ base: "1rem", md: "1.2rem" }}
            width={{ base: "100%", md: "85%" }}>
            Welcome to Ikenna's world of data insights. Uncover meaningful
            patterns, make informed decisions, <br /> and transform your data
            into a strategic asset.
          </Text>
          <Button
            as="a"
            href="#portfolio"
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
