import NextLink from "next/link";
import {
	Button,
	Container,
	Box,
	Heading,
	Image,
	Link,
	SimpleGrid,
	List,
	ListItem,
	Icon,
	useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section.js";
import Paragraph from "../components/paragraph.js";
import { BioSection, BioYear } from "../components/bio.js";
import Layout from "../components/layouts/article.js";
import { GridItem } from "../components/grid-item.js";
import { IoLogoTwitter, IoLogoGithub, IoLogoDiscor } from "react-icons/io5";

const Page = () => {
	return (
		<Layout>
			<Container>
				<Box
					borderRadius="lg"
					bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
					mb={5}
					p={2}
					align="center"
				>
					Welcome to our website, where you will find valuable information about
					lectures, projects, and ideas from our research group.
				</Box>
				<Box display={{ md: "flex" }}>
					<Box flexGrow={2}>
						<Heading as="h2" variant="page-title">
							Gerardo Marx Chávez-Campos
						</Heading>
						<Paragraph>
							{" "}
							About me ( Engineer | Scientist | Professor )
						</Paragraph>
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
						Affiliation
					</Heading>
					<Paragraph>
						Gerardo Marx is a Lecturer professor at the “
						<emph>Instituto Tecnológico de Morelia</emph>, ITM.” He is part of
						the postgraduate and research department focused on system
						identification and embedded system applications. His leading
						research is applied to metals and materials, chemical reaction
						kinetics, parameter estimations, high-hemperature oxidation,
						hydrogen production, image processing on metal analysis, and
						biomedical applications.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
								My Projects
							</Button>
						</NextLink>
					</Box>
				</Section>
				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Biography
					</Heading>
					<BioSection>
						<BioYear>1982</BioYear>
						Born in Uruapan, Michoacan, Mexico
					</BioSection>
					<BioSection>
						<BioYear>2006</BioYear>
						Graduated from the Electronics Engineering faculty at Instituto
						Tecnológico de Morelia
					</BioSection>
					<BioSection>
						<BioYear>2009</BioYear>
						Obtains his Master in Science (MSc) degree working on a embedded
						system for measuring soil&apos;s hydraulic conductivity
					</BioSection>
					<BioSection>
						<BioYear>2010</BioYear>
						Head of research and development at "Grupo Dipralight SA de CV"
						developing LED-Lamps and their power supplies
					</BioSection>
					<BioSection>
						<BioYear>2013</BioYear>
						Head of the "Departamento de Ingeniería Eléctrica-Electrónica" at
						the ITM
					</BioSection>
					<BioSection>
						<BioYear>2014</BioYear>
						Head of the Postgraduate Studies and Research Department (DEPI) at
						the ITM
					</BioSection>
					<BioSection>
						<BioYear>2018-Present</BioYear>
						Head of the National Laboratory SEDEAM at ITM
					</BioSection>
					<BioSection>
						<BioYear>2022</BioYear>
						Obtains his PhD from ITM for his work on system identification in
						high-temperature oxidation problem
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
				<Section delay={0.35}>
					<Heading as="h3" variant="section-title">
						On the social media
						<List>
							<ListItem>
								<Link href="https://github.com/gmarxcc" target="_blank">
									<Button
										variant="ghost"
										colorScheme="teal"
										leftIcon={<Icon as={IoLogoGithub} />}
									>
										@gmarxcc
									</Button>
								</Link>
							</ListItem>
						</List>
					</Heading>
				</Section>
			</Container>
		</Layout>
	);
};

export default Page;
