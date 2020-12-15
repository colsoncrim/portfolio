import React from "react"
import {
    Box,
    Grid,
    Flex,
    Icon,
    Heading,
    Text,
    Container
} from "@chakra-ui/react"
import { MdAccessibility } from "react-icons/md"
import { BsFillLightningFill, BsGraphUp } from "react-icons/bs"
import { GiPencilBrush } from "react-icons/gi"
import { ImSpinner4 } from "react-icons/im";
import { BiSupport, BiCodeBlock } from "react-icons/bi";



function Feature({ title, icon, desc, ...rest}) {
    return (
        <Box
            bg="#F8F7F7"
            rounded="12px"
            shadow="base"
            p="40px"
            {...rest}
        >
            <Flex
                rounded="full"
                w="12"
                h="12"
                bg="#04284E"
                align="center"
                justify="center"
            >
                <Icon fontSize="24px" color="white" as={icon} />
            </Flex>
            <Heading as="h3" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
                {title}
            </Heading>
            <Text fontSize="lg" color="gray.600">
                {desc}
            </Text>
        </Box>
    )
}

const Values = () => {
    return (
        <Box as="section" pt="40px" pb="40px">
            <Container py="20px" maxW="1280px">
                <Box maxW="760px" mx="auto" textAlign="center" mb="56px">
                    <Heading as="h3" mb="5">
                        What I Enjoy
                    </Heading>
                </Box>
                <Grid 
                    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                    gap={10}
                    px={{ md: 12 }}
                >
                    <Feature
                        icon={GiPencilBrush}
                        title="Professional Design"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    />
                    <Feature
                        icon={BsFillLightningFill}
                        title="Blazing Fast"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    />
                    <Feature
                        icon={ImSpinner4}
                        title="Modern"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    />
                    <Feature
                        icon={BsGraphUp}
                        title="Performance"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    />
                    <Feature
                        icon={BiSupport}
                        title="Top Level Support"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    />
                    <Feature
                        icon={BiCodeBlock}
                        title="Customized Development"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    />
                </Grid>
            </Container>
        </Box>
    )
}

export default Values;