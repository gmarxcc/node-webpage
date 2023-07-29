import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Inkdrop">
		<Container>
			<Title>
				Inkdrop <Badge>2016</Badge>
			</Title>
			<P>A Markdown ...</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Windows/macOS/Linux/iOS/Android</span>
				</ListItem>
			</List>
		</Container>
	</Layout>
);

export default Work;
