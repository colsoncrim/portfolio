import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react"

export default function HeroImage ({
    greeting,
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    ctaTextTwo,
    ctaLinkTwo,
    ...rest
}) {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { regex: "/Responsive_2.png/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    `)
    return (
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
                    as="h2"
                    size="md"
                    color="black"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    {greeting}
                </Heading>
                <Heading
                    as="h1"
                    size="3xl"
                    fontWeight="bold"
                    color="#04284E"
                    textAlign={["center", "center", "left", "left"]}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="black"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    {subtitle}
                </Heading>
                <Box>
                    <Link to={ctaLink}>
                        <Button
                            bg="primary.500"
                            color="white"
                            borderRadius="8px"
                            _hover={{ bg: "primary.500" }}
                            _active={{
                              bg: "primary.400",
                              transform: "scale(0.98)",
                              borderColor: "primary.400",
                            }}
                            py="4"
                            px="4"
                            mr="4"
                            lineHeight="1"
                            size="md"
                        >
                            {ctaText}
                        </Button>
                    </Link>
                    <Link to={ctaLinkTwo}>
                        <Button
                            borderColor="primary.500"
                            border="2px"
                            variant="outline"
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            {ctaTextTwo}
                        </Button>
                    </Link>
                </Box>
            </Stack>
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <Img fluid={data.file.childImageSharp.fluid} alt="Responsive site" />
            </Box>
        </Flex>
    )
}

HeroImage.propTypes = {
    greeting: PropTypes.string,
    title: PropTypes.string,
    subtitle:PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    ctaTextTwo: PropTypes.string,
    ctaLinkTwo: PropTypes.string
}

HeroImage.defaultProps = {
    greeting: "Hi, my name is",
    title: "Colson Crim",
    subtitle: "I'm a JavaScript developer, living and working in Seattle",
    ctaText: "My Work",
    ctaLink: "/projects",
    ctaTextTwo: "Contact Me",
    ctaLinkTwo: "/contact"
}