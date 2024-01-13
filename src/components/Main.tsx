import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import headshot from "../assets/ikenna.jpg";
import {
  BiBarChartAlt,
  BiSearch,
  BiWrench,
  BiSolidMessageAltCheck,
} from "react-icons/bi";
const Main = () => {
  return (
    <Box padding="3rem">
      <Box id="about" marginY="3rem">
        <Heading
          textAlign="center"
          my="2rem"
          textDecoration="underline #6c63ff">
          About
        </Heading>
        <Flex justifyContent="space-around" width="100%" paddingX="3rem">
          <Box maxWidth="14rem">
            <Image
              src={headshot}
              boxSize="fit-content"
              objectFit="cover"
              alt="hero image"
              bgColor="transparent"
              borderRadius="12px"
            />
          </Box>
          <Box bgColor="#6c63ff" width="60%" borderRadius="12px">
            <Text
              padding="3rem 2rem"
              color="white"
              textAlign="justify"
              height="fit-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae deleniti minima, delectus repudiandae modi autem eius
              debitis totam similique laboriosam. Numquam harum, unde rem quidem
              aliquid reprehenderit eveniet provident sint! deleniti minima,
              delectus repudiandae modi autem eius debitis totam similique
              laboriosam. Numquam harum, unde rem quidem aliquid reprehenderit
              eveniet provident sint!
            </Text>
          </Box>
        </Flex>
      </Box>
      <Flex marginY="10rem" gap="2rem" flexDirection="column">
        <Heading
          my="2rem"
          textDecoration="underline #6c63ff"
          textAlign="center">
          Services
        </Heading>
        <Flex>
          <Flex flexDirection="column" alignItems="center">
            <Icon
              as={BiWrench}
              bg="transparent"
              boxSize={100}
              padding="2rem"
              border=".5px solid #6c63ff"
              borderRadius="50%"
              marginBottom="1rem"
              _hover={{
                bgColor: "#6c63ff",
                color: "white",
              }}
            />
            <Box textAlign="center">
              <Text
                fontSize="1.5rem"
                fontWeight="500"
                color="#6c63ff"
                marginY=".6rem">
                Data Management
              </Text>
              <Text>
                Data harvesting, cleaning and reshaping. Development of
                automated workflows.
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Icon
              as={BiSearch}
              bg="transparent"
              boxSize={100}
              padding="2rem"
              border=".5px solid #6c63ff"
              borderRadius="50%"
              marginBottom="1rem"
              _hover={{
                bgColor: "#6c63ff",
                color: "white",
              }}
            />
            <Box textAlign="center">
              <Text
                fontSize="1.5rem"
                fontWeight="500"
                color="#6c63ff"
                marginY=".6rem">
                Data Mining
              </Text>
              <Text>
                Data exploration, application of statistical methods,
                reproducible data analysis.
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Icon
              as={BiBarChartAlt}
              bg="transparent"
              boxSize={100}
              padding="2rem"
              border=".5px solid #6c63ff"
              borderRadius="50%"
              marginBottom="1rem"
              _hover={{
                bgColor: "#6c63ff",
                color: "white",
              }}
            />
            <Box textAlign="center">
              <Text
                fontSize="1.5rem"
                fontWeight="500"
                color="#6c63ff"
                marginY=".6rem">
                Data Visualisation
              </Text>
              <Text>
                Creation of static and interactive dataviz and dashboards,
                review of scientific figures.
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Icon
              as={BiSolidMessageAltCheck}
              bg="transparent"
              boxSize={100}
              padding="2rem"
              border=".5px solid #6c63ff"
              borderRadius="50%"
              marginBottom="1rem"
              _hover={{
                bgColor: "#6c63ff",
                color: "white",
              }}
            />
            <Box textAlign="center">
              <Text
                fontSize="1.5rem"
                fontWeight="500"
                color="#6c63ff"
                marginY=".6rem">
                Data Interpretation
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing odio.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Main;
