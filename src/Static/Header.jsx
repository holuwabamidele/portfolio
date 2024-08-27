import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>ADEYEMI SERIKI</h1>
        </Link>

        <Navigation>
          <Link to="/" style={{ textDecoration: "none" }}>
            <nav>HOME</nav>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <nav>PROJECTS</nav>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <nav>ABOUT</nav>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <nav>CONTACT</nav>
          </Link>
        </Navigation>
        <SideNav onClick={handleToggle}>
          <RxHamburgerMenu color="white" />
        </SideNav>
      </Wrapper>
      <div>{toggle ? <SideBar /> : null}</div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
const Wrapper = styled.div`
  font-family: Sora;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    cursor: pointer;
    color: white;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    cursor: pointer;
    margin: 0px 20px;
    color: white;
    font-size: 13px;
  }
`;

const SideNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 20px;
    align-items: center;
    cursor: pointer;
    color: white;
  }
`;
