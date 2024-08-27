import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import marv from "../../assets/marv.png";

const HomeFive = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ImageTextDiv>
            <ImageArea>
              <a href="https://movie-app-clone-smoky.vercel.app/">
                <img src={marv} alt="Image" />
              </a>
            </ImageArea>
            <TextArea>
              <h3>Replicated a disney movie site</h3>
              <p>
                The page was replicated with a colleague & the help of our
                instructor who taught & showed us how to go about it.
              </p>
              <hr />
              <main>
                <h4>Year</h4>
                <h4>2024</h4>
              </main>
              <hr />
              <main>
                <h4>Role</h4>
                <h4>Front-end Developer</h4>
              </main>
              <hr />
              <br />
              <Links>
                <Link
                  to="https://movie-app-clone-smoky.vercel.app/"
                  style={{ marginRight: "20px" }}
                >
                  <div style={{ color: "#D3E97A" }}>LIVE DEMO</div>
                </Link>
                <Link to="https://github.com/holuwabamidele/movie">
                  <div style={{ color: "#D3E97A" }}>
                    SEE ON GITHUB <FaGithub />
                  </div>
                </Link>
              </Links>
            </TextArea>
          </ImageTextDiv>
          <Link to="/projects">
            <button>CHECK OTHER PROJECTS</button>
          </Link>
        </Wrapper>
      </Container>
      <hr />
    </div>
  );
};

export default HomeFive;

const Container = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  color: white;
  button {
    background-color: #d3e97a;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    font-family: Sora;
    border: none;
    cursor: pointer;
    font-weight: 700;
  }
`;
const ImageTextDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
const ImageArea = styled.div`
  background-color: #1a1a1a;
  width: 500px;
  height: 300px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextArea = styled.div`
  width: 400px;
  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
`;
