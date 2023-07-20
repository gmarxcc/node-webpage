import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
	<Container>
	<Box borderRadius='lg' bg='red' mb={9} p={3.5} align='center'> 
	Hello, I&apos;m a noob developer!!
	</Box>

	<Box display={{ md: 'flex' }}>
		<Box flexGrow={2}>
			<Heading as='h2' variant='page-title'>
				Gerardo Marx
			</Heading>
		<p> About me ( Arts / Developer / Designer )</p>
		</Box>
	</Box>
	</Container>
  )
}

export default Page
