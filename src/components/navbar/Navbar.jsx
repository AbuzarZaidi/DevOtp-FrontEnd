import React from "react";
import {
  NavbarSection,
  Section,
  NavbarMenu,
  Logo,
  Menu,
  MenuItem,
  AuthButtons,
  Heading3,
  Image,
  SignupButton,
  SignupText,
  LoginButton,
  LoginText,
} from "./NavbarStyle";
import HeroSection from "../landingPage/herosection/HeroSection";
const Navbar = () => {
  return (
    <>
      <NavbarSection>
        <Section>
          <NavbarMenu>
            <Logo>
              <Image src="/images/logo.png" alt="Alt text for the image" />

              <Heading3>DevOTP</Heading3>
            </Logo>
            <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>Packages</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <MenuItem>How it works?</MenuItem>
              <MenuItem>Android App</MenuItem>
            </Menu>
            <AuthButtons>
              <SignupButton>
                <SignupText>Sign Up</SignupText>
              </SignupButton>
              <LoginButton>
                <LoginText>Login</LoginText>
              </LoginButton>
            </AuthButtons>
          </NavbarMenu>
        </Section>
        <HeroSection />
      </NavbarSection>
    </>
  );
};

export default Navbar;
