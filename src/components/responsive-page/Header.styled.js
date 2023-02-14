import { isMobileOnly } from "react-device-detect";
import styled, { css } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

export const HeaderWrap = styled.div`
  text-align: center;
`;

export const HeaderInnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

// LogoBox
export const LogoBoxMobileMixin = css`
  width: 100px;
  height: 50px;
`;
export const LogoBox = styled.div`
  background-color: black;
  width: 120px;
  height: 70px;
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  border-radius: 12px;
  line-height: 50px;
  vertical-align: center;
  ${isMobileOnly && LogoBoxMobileMixin}
`;

// Hamburger Button
export const HamburgerBtnMobileMixin = css`
  visibility: visible;
  cursor: pointer;
`;
export const HamburgerBtn = styled(GiHamburgerMenu)`
  visibility: hidden;
  ${isMobileOnly && HamburgerBtnMobileMixin}
`;

// Menu
export const MenuWrapMobileMixin = css`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-100%);
  opacity: 0;
  gap: 50px;
  padding-top: 30px;
  padding-right: 16px;
  flex-direction: column;
  transition: transform 300ms ease-in, opacity 300ms ease-in;
  background-color: white;
  width: 100%;
  pointer-events: none;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(0);
      opacity: 1;
      pointer-events: visible;
    `}
`;
export const MenuWrap = styled.div`
  position: static;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 20px;
  visibility: visible;

  ${isMobileOnly && MenuWrapMobileMixin}
`;

export const CloseBtnMobileMixin = css`
  visibility: visible;
  position: absolute;
  top: 16px;
  right: 30px;
`;
export const CloseBtn = styled(AiFillCloseCircle)`
  visibility: hidden;
  ${isMobileOnly && CloseBtnMobileMixin};
`;

export const MenuItem = styled.div`
  color: black;
  font-weight: 600;
  font-size: 15px;
`;
