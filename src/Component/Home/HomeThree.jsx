import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import dog from "../../assets/dog.png";

const HomeThree = () => {
  return (
    <Container>
      <Wrapper>
        <ImageTextDiv>
          <ImageArea>
            <a href="https://dog-wine.vercel.app/">
              <img src={dog} alt="image" />
            </a>
          </ImageArea>
          <TextArea>
            <h3>Dog</h3>
            <p>A dog site that shows different types of dogs.</p>
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
                to="https://dog-wine.vercel.app/"
                style={{ marginRight: "20px" }}
              >
                <div style={{ color: "#D3E97A" }}>LIVE DEMO</div>
              </Link>
              <Link to="https://github.com/holuwabamidele/Dog">
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

export default HomeThree;

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
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
