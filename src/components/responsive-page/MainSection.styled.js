import { isMobileOnly } from "react-device-detect";
import styled, { css } from "styled-components";

export const MainSectionWrapMobileMixin = css`
  flex-direction: column;
`;
export const MainSectionWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 90px;
  margin-top: 100px;
  ${isMobileOnly && MainSectionWrapMobileMixin}
`;

const TextSectionMobileMixin = css`
  width: 100%;
`;
export const TextSection = styled.div`
  text-align: left;
  width: 55%;
  ${isMobileOnly && TextSectionMobileMixin}
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 24px;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 30px;
`;

export const SaleBtn = styled.button`
  color: white;
  background-color: black;
  border-radius: 24px;
  border: none;
  padding: 16px 24px;
`;

const ImageSectionMobileMixin = css`
  width: 100%;
`;
export const ImageSection = styled.img`
  width: 45%;
  ${isMobileOnly && ImageSectionMobileMixin}
`;
