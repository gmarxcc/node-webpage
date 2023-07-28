import NextLink from "next/link";
import {
	Button,
	Container,
	Box,
	Heading,
	Image,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section.js";
import Paragraph from "../components/paragraph.js";
import { BioSection, BioYear } from "../components/bio.js";

const Page = () => {
	return (
		<Container>
			<Box
				borderRadius="lg"
				bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
				mb={5}
				p={2}
				align="center"
			>
				Hello, I&apos;m a noob developer!!
			</Box>
			<Box display={{ md: "flex" }}>
				<Box flexGrow={2}>
					<Heading as="h2" variant="page-title">
						Gerardo Marx
					</Heading>
					<p> About me ( Arts / Developer / Designer )</p>
				</Box>
				<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					align="center"
				>
					<Image
						borderColor="whiteAlpha.800"
						borderWidth={4}
						borderStyle="solid"
						maxWidth="150px"
						display="inline-block"
						borderRadius="full"
						src="/images/gmarxPic.jpg"
						alt="Profile picture from Marx"
					/>
				</Box>
			</Box>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Work
				</Heading>
				<Paragraph>
					Gerardo Marx is a Lecturer professor at the “Instituto Tecnológico de
					Morelia.” He is part of the postgraduate and research department
					focused on System Identification and Embedded System applications. His
					leading research is applied to metals and materials, chemical reaction
					kinetics, Parameter Estimations, High-Temperature Oxidation, hydrogen
					production, Image processing on metal analysis, and Biomedical
					Applications. Gerardo Marx some text more here called{" "}
					<NextLink href="/works/inkdrop">
						<Link>Inkdop</Link>
					</NextLink>
					.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My portfolio
						</Button>
					</NextLink>
				</Box>
			</Section>
			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>1982</BioYear>
					Born in Urupan, Mexico
				</BioSection>
				<BioSection>
					<BioYear> 2006 </BioYear>
					Graduated from the Electronics Engineering faculty at Instituto
					Tecnológico de Morelia.
				</BioSection>
			</Section>
			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					Recent Publications
				</Heading>
				<Paragraph>
					Determination of distal temperature using infrared thermography in
					Mexican children with diabetes.{" "}
					<Link href="https://www.tandfonline.com/doi/abs/10.1080/17686733.2023.2236856?journalCode=tqrt20">
						PDF
					</Link>
				</Paragraph>
			</Section>
		</Container>
	);
};

export default Page;
