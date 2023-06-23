import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 300px;
	background-color: #f7f7f7;
	font-size: 24px;
	color: #333;
`;

export default function Contact() {
  	return <ContactContainer>ComeMap</ContactContainer>;
}