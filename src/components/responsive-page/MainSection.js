import React from "react";
import { ImageSection, MainSectionWrap, SaleBtn, SubTitle, TextSection, Title } from "./MainSection.styled";

function MainSection() {
  const IMG_URL =
    "https://sendbird.sfo3.digitaloceanspaces.com/cms/sendbird-vs-sms.gif";
  const TITLE = "In-app messages for conversion and retention";
  const SUB_TITLE =
    "Innovative brands around the world boost engagement, conversions, and CSAT with Sendbird's conversations platform. Build social, marketing, and support chat into your app.";
  const BTN_TEXT = "Talk to Sales";
  return (
    <MainSectionWrap>
      <TextSection>
        <Title>{TITLE}</Title>
        <SubTitle>{SUB_TITLE}</SubTitle>
        <SaleBtn>{BTN_TEXT}</SaleBtn>
      </TextSection>
      <ImageSection src={IMG_URL} />
    </MainSectionWrap>
  );
}

export default MainSection;

