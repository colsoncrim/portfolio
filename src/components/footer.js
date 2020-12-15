import React from "react"
import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  Divider
} from "@chakra-ui/react"

import { Link as GatsbyLink } from "gatsby"

const Footer = () => {
    return (
        <Box as="footer" py={10} px={8} bt="2px" bg="#04284E">
            <Box maxW="1000px" mx="auto">
                <Flex wrap="wrap" justify="center">
                    <Stack textAlign="center" my={4} w={["100%", "50%", "33%"]}>
                        <Text fontWeight="900" color="gray.100">
                            Social
                        </Text>
                        <Link fontWeight="500" color="gray.300">Twitter</Link>
                        <Link fontWeight="500" color="gray.300">LinkedIn</Link>
                    </Stack>
                    <Stack textAlign="center" my={4} w={["100%", "50%", "33%"]}>
                        <Text fontWeight="900" color="gray.100">
                            Work
                        </Text>
                        <Link fontWeight="500" color="gray.300">Github</Link>
                        <Link fontWeight="500" color="gray.300">Dribbble</Link>
                    </Stack>
                    <Stack textAlign="center" my={4} w={["100%", "50%", "33%"]}>
                        <Text fontWeight="900" color="gray.100">
                            Contact
                        </Text>
                        <Link fontWeight="500" color="gray.300">colsoncrim1@gmail.com</Link>
                        <Link fontWeight="500" color="gray.300">(555) 555-5555</Link>
                    </Stack>
                </Flex>
                <Divider borderColor="gray.500" mb={4} mt={4} />
                <Flex justify-content="space-between" >
                    <GatsbyLink to="/">
                    <Text fontSize="xl" color="white">
                        <strong>colsoncrim</strong>.dev
                    </Text>
                    </GatsbyLink>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer;