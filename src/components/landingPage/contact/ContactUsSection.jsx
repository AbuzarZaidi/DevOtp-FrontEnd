import React from "react";
import {
  Section,
  Heading,
  SubmitButton,
  SubmitButtonText,
  Heading2,
  EmailField,
  MessageField,
  InnerSection,
  Field,
} from "./ContactUsSectionStyle";

const ContactUsSection = () => {
  return (
    <Section>
      <Heading>Contact</Heading>
      <InnerSection>
        <div style={{ marginRight: "2.1rem" }}>
          <Heading2>Name</Heading2>
          <Field type="text" placeholder="Name"></Field>
        </div>
        <div style={{ marginLeft: "2.1rem" }}>
          <Heading2>Phone#</Heading2>
          <Field type="text" placeholder="Phone"></Field>
        </div>
      </InnerSection>
      <Heading2>Email</Heading2>
      <EmailField type="text" placeholder="Email"></EmailField>
      <Heading2>Message</Heading2>
      <MessageField type="text" placeholder="Message"></MessageField>
      <SubmitButton>
        <SubmitButtonText>Submit</SubmitButtonText>
      </SubmitButton>
    </Section>
  );
};

export default ContactUsSection;
