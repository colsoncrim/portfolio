import React from "react"
import {
    Flex,
    Stack,
    Badge,
    Text,
    Link
} from "@chakra-ui/react"

const Banner = () => {
    return (
        <Stack
            display={["none", "none", "flex"]}
            isInline
            py={2}
            px={12}
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="#04284E"
        >
            <Flex isInline>
                <Badge colorScheme="red" variant="subtle" mr={4}>
                    New Blog Post
                </Badge>
                <Text m={0} lineHeight="base" color="white" fontSize="sm">
                    Gatsby 101
                </Text>
            </Flex>
            <Link
                href="https://dev.to/"
                isExternal
            >
                <Text
                    fontSize="sm"
                    size="sm"
                    m={0}
                    color="white"
                >
                    Read the post here
                </Text>
            </Link>
        </Stack>
    )
}

export default Banner;