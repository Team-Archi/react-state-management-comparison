import React from "react";
import {
  DescriptionSectionWrap,
  FuncImgSection,
  FuncTextSection,
  FuncLabel,
  FuncTitle,
  FuncDetailText,
  HyperLink,
} from "./DescriptionSection.styled";

function DescriptionSection() {
  const IMG_URL =
    "https://sendbird.imgix.net/cms/1_2022-12-14-020147_airw.jpg?auto=format,compress&crop=faces&w=1920";
  return (
    <DescriptionSectionWrap>
      <FuncImgSection src={IMG_URL} />

      <FuncTextSection>
        <FuncLabel>{"ENGAGE"}</FuncLabel>
        <FuncTitle>{"In-app chat experiences that users will love"}</FuncTitle>
        <FuncDetailText>
          {
            "An easy-to-use suite of SDKs and UI kits that help you build trust and safety with customers:"
          }
          <ul>
            <li>
              Launch conversational capabilities that include moderation, rich
              media, translation, analytics, and more
            </li>
            <li>
              Scale to millions of users on a proven, secure, and global
              platform
            </li>
            <li>
              Get started quickly with elegant pre-built components and ship in
              days, not months
            </li>
          </ul>
        </FuncDetailText>
        <HyperLink>{"Learn about Sendbird for in-app engagement"}</HyperLink>
      </FuncTextSection>
    </DescriptionSectionWrap>
  );
}

export default DescriptionSection;
