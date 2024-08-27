import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};

export default SideBar;
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  height: 20vh;
  width: 100px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Navigation = styled.div`
  text-align: center;
  nav {
    cursor: pointer;
    font-size: 15px;
    margin: 10px 0px;
    color: white;
  }
`;
