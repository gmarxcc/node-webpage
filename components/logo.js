import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	heght: 30px;
	line-heigh: 20px;
	padding: 10px;

	&:hover img {
		transform: rotate(15deg);
	}
`;
const Logo = () => {
	const footPrintImg = `/images/logo${useColorModeValue("-day", "-dark")}.png`;
	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image src={footPrintImg} width={20} height={20} alt="logo" />
					<Text
						color={useColorModeValue("gray.800", "whiteAlpha.900")}
						fontFamily='M PLUS Rounded 1c", sans-serif'
						fontWeight="bold"
						ml={4}
					>
						Gerardo Marx
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
