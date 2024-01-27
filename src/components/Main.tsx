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
  link: string;
};
const PortfolioCard = ({ image, title, link }: PortfolioCardProps) => {
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
            textAlign="center"
            width="100%"
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
          href={link}>
          View
        </Button>
      </Box>
    </Box>
  );
};

const Main = () => {
  return (
    <Box>
      <Box
        padding={{
          base: "1rem",
          lg: "2rem",
          xl: "3rem",
        }}>
        <Box id="about">
          <Heading
            textAlign="center"
            my="3rem"
            textDecoration="underline #6c63ff">
            About
          </Heading>
          <Flex
            flexDirection={{
              base: "column",
              lg: "row",
            }}
            gap="2rem"
            justifyContent="space-around"
            alignItems={{
              base: "center",
              lg: "space-around",
            }}
            width="100%"
            paddingX={{
              base: "0rem",
              lg: "2rem",
              xl: "3rem",
            }}>
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
            <Box
              bgColor="#6c63ff"
              width={{
                base: "100%",
                xl: "60%",
              }}
              borderRadius="12px">
              <Text
                padding="3rem 2rem"
                color="white"
                textAlign="justify"
                height="fit-content">
                Hi, I'm Ikenna, a skilled data analyst with expertise in
                database querying, data cleaning and manipulation in SQL and
                Excel, as well as creating meaningful insightful visualizations
                and dashboards using Tableau and Power BI. Additionally, I
                provide expertise in data interpretation and reporting to help
                businesses make informed decisions based on their data.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex marginY="6rem" gap="2rem" flexDirection="column" id="services">
          <Heading marginY="3rem" textAlign="center">
            Services
          </Heading>
          <Flex
            flexDirection={{
              base: "column",
              lg: "row",
            }}
            gap={{
              base: "2rem",
              xl: ".3rem",
            }}
            justifyContent={{
              base: "center",
              xl: "unset",
            }}>
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
        <Box
          marginY="8rem"
          id="portfolio"
          paddingX={{
            base: "2rem",
          }}>
          <Heading textAlign="center" marginY="3rem">
            Portfolio
          </Heading>
          <Flex justifyContent="space-around" wrap="wrap" gap="2rem">
            <PortfolioCard
              image={portfolio1}
              title="Excel project"
              link="https://1drv.ms/x/c/8c73a1f0d0911f82/EQ_-JiXmSR9Pu1BIPclRjVgB5yXYFIj4cFobmgIE7ZtfkA"
            />
            <PortfolioCard
              image={portfolio2}
              title="Tableau Project"
              link="https://public.tableau.com/views/AirBnBProject_17010174849020/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
            />
            <PortfolioCard
              image={portfolio3}
              title="PowerBI Project"
              link="https://github.com/Ikenna001/PortfolioProject.git"
            />
          </Flex>
        </Box>

        <Flex
          id="contact"
          flexDirection="column"
          marginY="3rem"
          alignItems="center"
          bgColor="#eee"
          paddingY="3rem">
          <Heading textAlign="center" marginY="3rem">
            {" "}
            Contact Me
          </Heading>
          <Text
            textAlign="center"
            width={{
              base: "100%",
              lg: "80%",
              xl: "60%",
            }}
            marginBottom="1rem">
            I'm excited to connect with you and discuss how we can collaborate
            on data-driven projects. Whether you have questions, opportunities,
            or just want to say hello, feel free to reach out through the
            following channels:
          </Text>
          <Flex gap="3rem" justifyContent="center" marginY="2rem" wrap="wrap">
            <Button
              as="a"
              href="https://github.com/Ikenna001"
              textColor="#6c63ff"
              colorScheme="none"
              bg="transparent"
              padding="2rem"
              outline="2px solid #6c63ff"
              _active={{
                transform: "scale(1.1)",
                transition: "all .2s",
              }}>
              Github
            </Button>
            <Button
              as="a"
              href="http://linkedin.com/in/ikenna-nwekwo-416b9828b"
              textColor="#6c63ff"
              colorScheme="none"
              bg="transparent"
              padding="2rem"
              outline="2px solid #6c63ff"
              _active={{
                transform: "scale(1.1)",
                transition: "all .2s",
              }}>
              LinkedIn
            </Button>
            <Button
              as="a"
              href="mailto:ernestkenny17@gmail.com"
              textColor="#6c63ff"
              colorScheme="none"
              bg="transparent"
              padding="2rem"
              outline="2px solid #6c63ff"
              _active={{
                transform: "scale(1.1)",
                transition: "all .2s",
              }}>
              Mail
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Divider />
      <Flex
        id="footer"
        alignItems="flex-end"
        justifyContent="center"
        padding="2rem"
        color="#fff"
        bgColor="darkblue"
        fontWeight="200"
        fontSize=".8rem">
        <Text marginTop="auto">&copy; Copyright 2024 Nwekwo Ikenna</Text>
      </Flex>
    </Box>
  );
};

export default Main;
