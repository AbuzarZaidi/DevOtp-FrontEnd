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
export const SubmitButton = styled.button`
margin-top:2.5rem;
  width: 15rem;
  max-width: 500px;
  background: radial-gradient( circle farthest-corner at 10% 20%, rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% );
  border:none;
  border-radius:2rem;
`;
export const SubmitButtonText = styled.p`
 color:#ffffff;
 font-weight:500;
 font-size:1rem;
 padding:.7rem;
`;
export const Heading2 = styled.h4`
margin-top:1rem;
  font-size: 1.5rem;
  font-weight:500;
  text-align: left;
  color: #000000;
  margin-top: 2.5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem;  /* set a maximum width for the heading to limit its size */
`;
export const InnerSection=styled.div`
display:Flex;
justify-content: space-between;

`
export const Field=styled.input`
margin-top:.5rem;
width:20rem;
height:3rem;
border-radius:.8rem;
background:#EFEFFF;
border:none;
padding-left: 1rem;
&::placeholder {
  color: #999;
}

`;
export const EmailField=styled.input`
margin-top:.5rem;
width:45rem;
height:3rem;
border-radius:.8rem;
background:#EFEFFF;
border:none;
padding-left: 1rem;
&::placeholder {
  color: #999;
}
`;

export const MessageField=styled.textarea`
margin-top:.5rem;
font-family: 'Open Sans', sans-serif;
width:45rem;
height:10rem;
border-radius:.8rem;
background:#EFEFFF;
border:none;
padding-top: 1rem;
padding-left: 1rem;
&::placeholder {
  color: #999;
}
`;