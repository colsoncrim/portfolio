import React from "react"
import PropTypes from "prop-types"
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Stack,
    HStack,
    Heading,
    Container
} from "@chakra-ui/react"

import { FaReact, FaNodeJs, FaSass, FaVuejs } from "react-icons/fa"
import { SiGatsby, SiGraphql, SiHtml5, SiCss3, SiGithub } from "react-icons/si"
import { FiFigma } from "react-icons/fi"

function Feature({ title, subtitle, ...rest}) {
    return (
        <Box
            bg="#F8F7F7"
            rounded="12px"
            shadow="base"
            p={5}
            {...rest}
        >
            <HStack spacing="24px"py="40px">
                <Box>
                    <FaReact size={80} />
                </Box>
                <Box>
                    <SiGatsby size={80}/>
                </Box>
                <Box>
                    <SiGraphql size={80} />
                </Box>
                <Box>
                    <SiHtml5 size={80} />
                </Box>
                <Box>
                    <FiFigma size={80} />
                </Box>
            </HStack>
            <HStack spacing="24px" py="40px">
                <Box>
                    <FaNodeJs size={80} />
                </Box>
                <Box>
                    <SiCss3 size={80}/>
                </Box>
                <Box>
                    <SiGithub size={80} />
                </Box>
                <Box>
                    <FaSass size={80} />
                </Box>
                <Box>
                    <FaVuejs size={80} />
                </Box>
            </HStack>
        </Box>
    )
}

export default function Skills ({
    title,
    subtitle,
    ...rest
}) {
    return (
        <Box as="section">
            <Container py="50px" maxW="1200px" px="32px">
                    <Box maxW="760px" mx="auto" textAlign="center" mb="56px">
                        <Heading as="h2" size="3xl" mb="5">
                            {title}
                        </Heading>
                    </Box>
                <Flex
                    align="center"
                    justify={{ base: "center", md: "space-around", xl: "space-between" }}
                    direction={{ base: "column-reverse", md: "row" }}
                    wrap="no-wrap"
                    minH="70vh"
                    px={8}
                    mb={16}
                    {...rest}
                >
                    <Stack
                        spacing={4}
                        w={{ base: "80%", md: "40%" }}
                        align={["center", "center", "flex-start", "flex-start"]}
                    >
                        <Heading
                            as="h3"
                            size="lg"
                            color="black"
                            fontWeight="bold"
                            lineHeight={1.5}
                            textAlign={["center", "center", "left", "left"]}
                        >
                            {subtitle}
                        </Heading>
                        <Accordion defaultIndex={[0]}>
                            <AccordionItem>
                                <AccordionButton _expanded={{ bg: "#F8F7F7", color: "black" }} rounded="6px">
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                    JAMstack Development
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} bg="#F8F7F7" rounded="6px" fontSize="md" color="gray.800">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton _expanded={{ bg: "#F8F7F7", color: "black" }} rounded="6px">
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                    React Development
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} bg="#F8F7F7" rounded="6px" fontSize="md" color="gray.800">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionPanel>
                            </AccordionItem>
                            
                            <AccordionItem>
                                <AccordionButton _expanded={{ bg: "#F8F7F7", color: "black" }} rounded="6px">
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                    Web Design
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} bg="#F8F7F7" rounded="6px" fontSize="md" color="gray.800">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton _expanded={{ bg: "#F8F7F7", color: "black" }} rounded="6px">
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                    MERNstack
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} bg="#F8F7F7" rounded="6px" fontSize="md" color="gray.800">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Stack>
                    <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                        <Feature />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

Skills.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}
Skills.defaultProps  = {
    title: "What I Enjoy",
    subtitle: "Strengths"
}