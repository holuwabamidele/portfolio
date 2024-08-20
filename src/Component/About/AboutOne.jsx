import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import boy from "../../assets/boy.jpg";
import { SiLinktree } from "react-icons/si";

const AboutOne = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <WrapperOne>
            <h1>ABOUT ME</h1>
            <section>
              <h2>I am a front-end developer based in Nigeria.</h2>
              <p>
                I am a front-end developer looking for opportunities. Likes to
                focus on <br /> accessibility when developing, passionate and
                curious about solving problems. <br />
                Currently, I am exploring Reactjs and a bit of designing. while
                I am not <br />
                programming, I enjoy playing and watching football/soccer and
                movies. <br />
                Learning more to improve skill.
              </p>
              <div>
                <a href="https://github.com/holuwabamidele?tab=repositories">
                  <div>
                    <FaGithub fontSize="20px" color="#D3E97A" />
                  </div>
                </a>
                <a href="https://linktr.ee/bamidele9">
                  <div>
                    <SiLinktree fontSize="20px" color="#D3E97A" />
                  </div>
                </a>
              </div>
            </section>
          </WrapperOne>
          <WrapperTwo>
            {" "}
            <img src={boy} alt="" />
          </WrapperTwo>
          <WrapperThree>
            {" "}
            <h1>MY CAPABILITIES</h1>
            <section>
              <p>
                I am always looking to add more skills to what I have learnt{" "}
                <br />
                so that I can be efficient in the programming world.
              </p>
              <button>HTML</button>
              <button>CSS</button>
              <button>JAVASCRIPT</button>
              <button>REACT</button>
            </section>
          </WrapperThree>
        </Wrapper>
      </Container>
      <hr />
    </div>
  );
};

export default AboutOne;

const Container = styled.div`
  background-color: black;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  color: white;
  width: 80%;
  @media (max-width: 1024) {
    justify-content: center;
  }
`;
const WrapperOne = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    display: flex;
    a {
      margin-right: 10px;
    }
  }
`;
const WrapperTwo = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 20px;
    height: 400px;
    width: 500px;
  }
`;
const WrapperThree = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  button {
    width: 100px;
    height: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    margin: 10px;
  }
`;
