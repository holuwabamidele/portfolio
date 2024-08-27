import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import lang from "../../assets/lang.png";

const HomeFour = () => {
  return (
    <Container>
      <Wrapper>
        <ImageTextDiv>
          <ImageArea>
            <a href="https://language-seven.vercel.app/">
              <img src={lang} alt="Image" />
            </a>
          </ImageArea>
          <TextArea>
            <h3>Replica of a Language School</h3>
            <p>
              The Language school has different people from different countries
              to teach their language to new learner.{" "}
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
                to="https://language-seven.vercel.app/"
                style={{ marginRight: "20px" }}
              >
                <div style={{ color: "#D3E97A" }}>LIVE DEMO</div>
              </Link>
              <Link to="https://github.com/holuwabamidele/Language">
                <div style={{ color: "#D3E97A" }}>
                  SEE ON GITHUB <FaGithub />
                </div>
              </Link>
            </Links>
          </TextArea>
        </ImageTextDiv>
      </Wrapper>
    </Container>
  );
};

export default HomeFour;

const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  color: white;
`;
const ImageTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
    h4 {
    }
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
`;
