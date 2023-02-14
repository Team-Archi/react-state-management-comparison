import React from "react";
import styled from "styled-components";

function TextBorderLine() {
  const TEXT = "Customizable chat API that delivers business outcomes";
  const HYPERLINK = "Learn about our chat API";
  return (
    <TextBorderLineWrap>
      <Title>{TEXT}</Title>
      <HyperLinkText>{HYPERLINK}</HyperLinkText>
    </TextBorderLineWrap>
  );
}

export default TextBorderLine;

export const TextBorderLineWrap = styled.div`
  text-align: center;
  margin-top : 20px;
`;
export const Title = styled.p`
  font-size: 30px;
  font-weight: 900;
`;
export const HyperLinkText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #6210cc;
`;
