import { isMobileOnly } from "react-device-detect";
import styled, { css } from "styled-components";

const DescriptionSectionWrapMobileMixin = css`
  flex-direction: column;
  gap: 30px;
`;
export const DescriptionSectionWrap = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 60px;
  ${isMobileOnly && DescriptionSectionWrapMobileMixin}
`;

const FullWidthMixin = css`
  width: 100%;
`;
export const FuncTextSection = styled.div`
  width: 55%;
  ${isMobileOnly && FullWidthMixin}
`;
export const FuncLabel = styled.span`
  color: #424242;
  font-size: 15px;
  font-weight: 600;
`;
export const FuncTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
`;
export const FuncDetailText = styled.div`
  & > ul {
    list-style-position: outside;
    margin-left: -20px;
    & > li {
      margin-bottom: 30px;
      max-width: 400px;
      line-height: 25px;
    }
  }
  margin-bottom: 25px;
`;
export const HyperLink = styled.a`
  color: #6210cc;
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;
`;

export const FuncImgSection = styled.img`
  width: 45%;
  ${isMobileOnly && FullWidthMixin}
`;
