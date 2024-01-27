import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Nav = () => {
  return (
    <Flex justifyContent="space-between">
      <Grid
        templateColumns="repeat(5, 1fr)"
        alignItems="center"
        padding="1rem 2rem"
        borderBottom=".5px solid #e0e0e0">
        <GridItem colSpan={2}>
          <Heading
            fontSize={{
              base: "1.7rem",
              lg: "2.3rem",
            }}>
            Analysis
          </Heading>
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            lg: 1,
          }}
          visibility={{
            base: "hidden",
            lg: "visible",
          }}>
          <List display="flex" gap="3rem">
            <Link href="#about">
              <ListItem>About</ListItem>
            </Link>
            <Link href="#services">
              <ListItem>Services</ListItem>
            </Link>

            <Link href="#portfolio">
              <ListItem>Portfolio</ListItem>
            </Link>
            <Link href="#contact">
              <ListItem>Contact</ListItem>
            </Link>
          </List>
        </GridItem>
        <GridItem
          colSpan={{
            base: 0,
            lg: 1,
          }}
          display={{
            base: "grid",
            lg: "none",
          }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<HamburgerIcon />}
              variant="outline"
              borderRadius="15px"
            />
            <MenuList
              p="1rem"
              textAlign="center"
              display="flex"
              flexDir="column"
              gap="1rem">
              <MenuItem>
                <Button
                  as="a"
                  href="#about"
                  textColor="#000"
                  fontWeight="400"
                  variant="link">
                  About Us
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  as="a"
                  href="#services"
                  variant="link"
                  textColor="#000"
                  fontWeight="400">
                  Services
                </Button>
              </MenuItem>

              <MenuItem>
                <Button
                  as="a"
                  href="#portfolio"
                  variant="link"
                  textColor="#000"
                  fontWeight="400">
                  Portfolio
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  as="a"
                  href="#pcontact"
                  textColor="#000"
                  fontWeight="400"
                  variant="link">
                  Contact
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </GridItem>
      </Grid>{" "}
    </Flex>
  );
};

export default Nav;
