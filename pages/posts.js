import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbFishWorkflow from "../public/images/contents/youtube-fish-workflow.jpg";
import thumbMyDeskSetup from "../public/images/contents/youtube-my-desk-setup.jpg";

const Posts = () => (
	<Layout title="Posts">
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Popular Posts
			</Heading>

			<Section delay={0.1}>
				<SimpleGrid columns={[1, 2, 2]} gap={6}>
					<GridItem
						title="My Fish workflow"
						thumbnail={thumbFishWorkflow}
						href="https://www.youtube.com/watch?v=KKxhf50FIPI"
					/>
					<GridItem
						title="My desk setup (Late 2020)"
						thumbnail={thumbMyDeskSetup}
						href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
					/>
				</SimpleGrid>
			</Section>
		</Container>
	</Layout>
);

export default Posts;
