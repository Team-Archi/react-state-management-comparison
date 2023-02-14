import { isMobileOnly } from "react-device-detect";
import styled, { css } from "styled-components";

export const ResponsivePageWrap = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
`;

export const PageInnerWrapMobileMixin = css`
  max-width: 100vw;
  margin-left: 16px;
  margin-right: 16px;
  padding: 12px 0px;
`;
export const PageInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 30px;
  ${isMobileOnly && PageInnerWrapMobileMixin}
`;

