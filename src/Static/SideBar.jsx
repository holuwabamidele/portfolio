import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <nav>Work</nav>
          <nav>About</nav>
          <nav>Contact</nav>
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
  }
`;
