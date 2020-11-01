import React from "react";
import { HeaderContainer, LogoContainer, TitleContainer } from "./Header.styles";
import { ReactComponent as Logo } from "../../assets/images/shop-logo.svg";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo' />
    </LogoContainer>
    <TitleContainer>
      <h3>Awesome Smartphones</h3>
    </TitleContainer>
  </HeaderContainer>
)

export default Header;