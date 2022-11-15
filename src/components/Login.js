import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTALogo src="./images/cta-logo-one.svg"></CTALogo>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into.
        </Description>
        <CTALogoTwo src='./images/cta-logo-two.png'/>
      </Content>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  height: calc(100vh-70px);
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    z-index: -5;
    background-image: url("/images/login-background.jpg");
  }
`;
const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 1px 0;
`;
const CTALogo = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.div`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;
const CTALogoTwo = styled.img`
margin-top: 30px;
`
