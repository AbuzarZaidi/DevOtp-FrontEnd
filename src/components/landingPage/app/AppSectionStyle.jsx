import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* set the section width to 100% of the parent element */
  max-width: 45rem; /* set a maximum width for the section to limit its size */
  margin: 0 auto; /* center the section horizontally using auto margin */
`;

export const Heading = styled.h2`
margin-top:5rem;
  font-size: 2rem;
  text-align: center;
  color: #3333AD;
`;


export const Heading3 = styled.h4`
margin-top:2.5rem;
  font-size: 1.1rem;
  text-align: left;
  color: #000000;
  margin-top: 1.5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem;  /* set a maximum width for the heading to limit its size */
`;

export const List = styled.ul`
margin-top:2rem;
  font-size: 1rem;
  color: #000000;
  padding-left: 0;
  width: 100%; /* set the list width to 100% of the parent element */
  max-width: 42rem;  /* set a maximum width for the list to limit its size */
`;

export const ListItem = styled.li`
  text-align: left;
`;

export const ImageContainer = styled.div`
margin-top:2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
`;

export const InstallButton = styled.button`
  width: 15rem;
  max-width: 500px;
  background: radial-gradient( circle farthest-corner at 10% 20%, rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% );
  border:none;
  border-radius:2rem;
`;
export const InstallButtonText = styled.p`
 color:#ffffff;
 font-weight:500;
 font-size:1rem;
 padding:.7rem;
`;