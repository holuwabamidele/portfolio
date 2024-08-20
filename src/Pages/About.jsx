import styled from "styled-components";
import AboutOne from "../Component/About/AboutOne";
import AboutTwo from "../Component/About/AboutTwo";

const About = () => {
  return (
    <Container>
      <AboutOne />
      <AboutTwo />
    </Container>
  );
};

export default About;

const Container = styled.div`
  min-height: calc(100vh - 20vh);
  margin-top: 50px;
  overflow-x: hidden;
`;
