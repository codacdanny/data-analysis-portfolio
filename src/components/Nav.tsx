import {
  Box,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";

const Nav = () => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      alignItems="center"
      padding="1rem 2rem"
      borderBottom=".5px solid #e0e0e0">
      <GridItem colSpan={2}>
        <Heading>Analysis</Heading>
      </GridItem>
      <GridItem colSpan={2}>
        <List display="flex" gap="3rem">
          <Link>
            <ListItem>About</ListItem>
          </Link>
          <Link>
            <ListItem>Services</ListItem>
          </Link>

          <Link>
            <ListItem>Portfolio</ListItem>
          </Link>
          <Link>
            <ListItem>Contact</ListItem>
          </Link>
        </List>
      </GridItem>
      <Box />
    </Grid>
  );
};

export default Nav;
