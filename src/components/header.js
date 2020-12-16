import { Link } from "gatsby"
import React from "react"
import { Box, Flex, Text, Button} from "@chakra-ui/react"

const MenuItems = props => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = props => {
  const [show, setShow] = React.useState(false) // setting show to false (menuItems are shown on screens larger than md)
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["#04284E", "#04284E", "transparent", "transparent"]}
      color={["black", "black", "primary.700", "primary.700"]}
      {...props}
    >

      <Flex align="center">
        <Link to="/">
          <Text fontSize="2xl" color={["white", "white", "#04284E", "#04284E"]}>
            <strong>colsoncrim</strong>.dev
          </Text>
        </Link>
      </Flex>
      
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      
      <Box // beginning of actual menu items
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems>
            <Link to="/">
              <Button color="black" variant="link" mx="auto" color={["white", "white", "#04284E", "#04284E"]}>Home</Button>
            </Link>
          </MenuItems>
          <MenuItems>
            <Link to="/projects">
              <Button color="black" variant="link" mx="auto" color={["white", "white", "#04284E", "#04284E"]}>Projects</Button>
            </Link>
          </MenuItems>
          <MenuItems>
            <Link to="/about">
              <Button color="black" variant="link" mx="auto" color={["white", "white", "#04284E", "#04284E"]}>About</Button>
            </Link>
          </MenuItems>
          <MenuItems isLast>
            <Link to="/contact">
              <Button 
                bg="primary.500" 
                color="white" 
                variant="solid"
                _hover={{ bg: "primary.500" }}
                _active={{
                  bg: "primary.400",
                  transform: "scale(0.98)",
                  borderColor: "primary.400",
                }}
                >
                  Contact
              </Button>
            </Link>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header;