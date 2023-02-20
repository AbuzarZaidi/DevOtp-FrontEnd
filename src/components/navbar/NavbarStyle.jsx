import styled from "styled-components";
export const NavbarSection = styled.footer`
  background: #fff7e0;
  background-image: radial-gradient(
      at 80.1% 83.3%,
      #ffe0fb 0px,
      transparent 50%
    ),
    radial-gradient(at 74.1% 34.7%, #d7f7fa 0px, transparent 50%),
    radial-gradient(at 27.7% 87%, #eedbff 0px, transparent 50%);
  height: 85vh;
  weight: 100%;
`;
export const Section = styled.section`
  display: flex;

  flex-direction: column;
  align-items: start;
  width: 100%; /* set the section width to 100% of the parent element */
  max-width: 85rem; /* set a maximum width for the section to limit its size */
  margin: 0 auto; /* center the section horizontally using auto margin */
`;
export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:2rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-right:10rem;
`;
export const Heading3 = styled.h4`
  font-size: 1.1rem;

  margin-left: 1rem;
  color: #3333ad;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem; /* set a maximum width for the heading to limit its size */
`;
export const Image = styled.img`
  width: 100%;
  max-width: 500px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:10rem;
`;
export const AuthButtons = styled.div`
  display: flex;
  // justify-content: space-betwen;
  align-items: center;
`;

export const MenuItem = styled.p`
  font-weight: 600;
  color: #3333ad;
  margin: 0 1.5rem;
`;
export const SignupButton = styled.button`
  background: none;
  margin-right: 1rem;
  width: 6rem;
  max-width: 500px;
  border: 3px solid #000000;
  border-radius: 2rem;
`;
export const SignupText = styled.p`
  color: #000000;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.7rem;
`;
export const LoginButton = styled.button`
  background: none;
  // margin-top: 2.5rem;
  width: 6rem;
  max-width: 500px;
  border: 3px solid #3333ad;
  border-radius: 2rem;
`;
export const LoginText = styled.p`
  color: #3333ad;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.7rem;
`;
