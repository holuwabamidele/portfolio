import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeSix = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <div>
            <h1>ABOUT ME</h1>
          </div>
          <section>
            <h4>I am a front-end developer based in NIgeria</h4>
            <p>
              I am a front-end developer looking for opportunities. Likes to
              focus on accessibility when developing, passionate and curious
              about solving problems. Currently, I am exploring Reactjs and a
              bit of designing. while I am not programming, I enjoy playing and
              watching football/soccer and movies. Learning more to improve
              skill.
            </p>
            <Link to="/about">MORE ABOUT ME</Link>
            <img src="" alt="" />
          </section>
        </Wrapper>
      </Container>
      <hr />
    </div>
  );
};

export default HomeSix;

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  color: white;
  width: 80%;
  display: flex;
  justify-content: space-between;
  div {
    width: 300px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  section {
    width: 600px;
  }
`;
