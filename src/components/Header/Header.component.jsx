import React from "react";
import { HeaderContainer, LogoContainer, TitleContainer } from "./Header.styles";
import { ReactComponent as Logo } from "../../assets/images/shop-logo.svg";
import { Heading } from "arwes";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo' />
    </LogoContainer>
    <TitleContainer>
      <Heading node='h3'>Awesome Smartphones</Heading>
    </TitleContainer>
  </HeaderContainer>
)

export default Header;