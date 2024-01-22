import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import headshot from "../assets/ikenna.jpg";
import portfolio1 from "../assets/excel.png";
import portfolio2 from "../assets/tableau.png";
import portfolio3 from "../assets/power.jpg";
import {
  BiBarChartAlt,
  BiSearch,
  BiWrench,
  BiSolidMessageAltCheck,
} from "react-icons/bi";
import { useState } from "react";

type PortfolioCardProps = {
  image: string;
  title: string;
};
const PortfolioCard = ({ image, title }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Box
        position="relative"
        transition="all 0.3s ease"
        _hover={{
          "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "#6c63ff",
            opacity: 0.7,
            zIndex: 1,
          },
        }}>
        <Image
          src={image}
          boxSize="300px"
          objectFit="cover"
          alt={title}
          _hover={{
            filter: "blur(3px)",
          }}
        />
        {isHovered && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="#fff"
            padding="0.5rem 1rem"
            borderRadius="8px"
            fontWeight="bold"
            zIndex={2}>
            {title}
          </Box>
        )}
      </Box>
      <Box textAlign="center">
        <Button
          marginY="2rem"
          padding="1.5rem 4rem"
          bgColor="#6c63ff"
          color="white"
          colorScheme="messenger"
          borderRadius="9px"
          as="a"
          href="#">
          View
        </Button>
      </Box>
    </Box>
  );
};

const Main = () => {
  return (
    <Box>
      <Box padding="3rem">
        <Box id="about">
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
                debitis totam similique laboriosam. Numquam harum, unde rem
                quidem aliquid reprehenderit eveniet provident sint! deleniti
                minima, delectus repudiandae modi autem eius debitis totam
                similique laboriosam. Numquam harum, unde rem quidem aliquid
                reprehenderit eveniet provident sint!
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex marginY="6rem" gap="2rem" flexDirection="column">
          <Heading marginY="3rem" textAlign="center">
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
        <Box marginY="6rem">
          <Heading textAlign="center" marginY="3rem">
            {" "}
            Portfolio
          </Heading>
          <Flex justifyContent="space-around">
            <PortfolioCard image={portfolio1} title="Portfolio 1" />
            <PortfolioCard image={portfolio2} title="Portfolio 2" />
            <PortfolioCard image={portfolio3} title="Portfolio 3" />
          </Flex>
        </Box>

        <Flex
          flexDirection="column"
          marginY="6rem"
          alignItems="center"
          bgColor="#eee"
          paddingY="3rem">
          <Heading textAlign="center" marginY="3rem">
            {" "}
            Contact Me
          </Heading>
          <Text textAlign="center" width="60%" marginBottom="1rem">
            Feel free to contact me for any question. For open source projects,
            please open an issue or pull request on Github. If you want to
            follow my work, reach me on Twitter. Otherwise, send me an email
            below
          </Text>
          <Flex gap="3rem" justifyContent="center" marginY="2rem">
            <Button
              textColor="#6c63ff"
              colorScheme="none"
              bg="transparent"
              padding="2rem"
              outline="2px solid #6c63ff">
              Github
            </Button>
            <Button
              textColor="#6c63ff"
              colorScheme="none"
              bg="transparent"
              padding="2rem"
              outline="2px solid #6c63ff">
              LinkedIn
            </Button>
            <Button
              textColor="#6c63ff"
              colorScheme="none"
              bg="transparent"
              padding="2rem"
              outline="2px solid #6c63ff">
              Mail
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Divider />
      <Flex
        flexDirection="column"
        justifyContent="center"
        padding="4rem"
        color="#fff"
        bgColor="darkblue"
        fontWeight="200"
        fontSize=".8rem">
        &copy; Copyright 2024 Nwekwo Ikenna
      </Flex>
    </Box>
  );
};

export default Main;
