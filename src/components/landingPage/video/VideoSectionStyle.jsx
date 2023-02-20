import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* set the section width to 100% of the parent element */
  max-width: 45rem; /* set a maximum width for the section to limit its size */
  margin: 0 auto; /* center the section horizontally using auto margin */
`;
export const Heading2 = styled.h4`
  font-size: 1.2rem;
  text-align: left;
  color: #000000;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem;  /* set a maximum width for the heading to limit its size */
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Video = styled.video`
  width: 45rem;
  height: 20rem;
`;

export const VideoCaption = styled.track`
  color: #ffffff;
  font-size: 1.2em;
  font-family: sans-serif;
  text-shadow: 2px 2px #000000;
`;