import styled from "styled-components";
import HomeOne from "../Component/Home/HomeOne";
import HomeTwo from "../Component/Home/HomeTwo";
import HomeThree from "../Component/Home/HomeThree";
import HomeFour from "../Component/Home/HomeFour";
import HomeFive from "../Component/Home/HomeFive";
import HomeSix from "../Component/Home/HomeSix";

const Home = () => {
  return (
    <Container>
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
      <HomeFive />
      <HomeSix />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 20vh);
  margin-top: 50px;
  background-color: black;
  overflow-x: hidden;
`;
