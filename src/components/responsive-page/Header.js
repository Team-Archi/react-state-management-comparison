import React, { useState } from "react";
import {
  CloseBtn,
  HamburgerBtn,
  HeaderInnerWrap,
  HeaderWrap,
  LogoBox,
  MenuItem,
  MenuWrap,
} from "./Header.styled";

function Header() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(!isOpenMenu);
  const closeMenu = () => setOpenMenu(false);

  const MENU = [
    "Products",
    "Solution",
    "Developer",
    "Pricing",
    "Customer",
    "Company",
  ];

  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <LogoBox>SendBald</LogoBox>
        <HamburgerBtn onClick={handleOpenMenu} size={20} />
        <MenuWrap isOpen={isOpenMenu}>
          <CloseBtn size={30} onClick={closeMenu} />
          {MENU.map((menu) => {
            return <MenuItem key={menu}>{menu}</MenuItem>;
          })}
        </MenuWrap>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
}

export default Header;
