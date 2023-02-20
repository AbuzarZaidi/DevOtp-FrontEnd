import styled from "styled-components";

export const Section = styled.section`
  display: flex;
//   flex-direction: column;
  align-items: center;
  width: 100%; /* set the section width to 100% of the parent element */
  max-width: 85rem; /* set a maximum width for the section to limit its size */
  margin: 0 auto; /* center the section horizontally using auto margin */
`;

export const ImageContainer = styled.div`
margin-top:4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 70rem;
`;

export const ContentContainer=styled.div`
margin-top:4rem;
margin-left:20rem;
width:30rem;
`;
export const Content1=styled.h1`
font-weight:700;
font-size:2rem;
margin-top:1rem;
color:#000000;
`;
export const Content2=styled.h1`
font-weight:700;
margin-top:1rem;
font-size:2rem;
color:#3333AD;
`;
export const ReadMoreButton = styled.button`
  width: 8rem;
  margin-top:2rem;
  max-width: 500px;
  background: radial-gradient( circle farthest-corner at 10% 20%, rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% );
  border:none;
  border-radius:2rem;
`;
export const ReadMoreButtonText = styled.p`
 color:#ffffff;
 font-weight:500;
 font-size:1rem;
 padding:.7rem;
`;