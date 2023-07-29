import { Box } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box align="center" opacity={0.4} fontSize="sm">
			&copy; {new Date().getFullYear()} Gerardo Marx Chávez-Campos. All Rights
			Reserved.
		</Box>
	);
};

export default Footer;
