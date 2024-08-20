import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const HomeFive = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ImageTextDiv>
            <ImageArea>
              <img src="" alt="Image" />
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
                <Link style={{ marginRight: "20px" }}>
                  <div style={{ color: "#D3E97A" }}>LIVE DEMO</div>
                </Link>
                <Link>
                  <div style={{ color: "#D3E97A" }}>
                    SEE ON GITHUB <FaGithub />
                  </div>
                </Link>
              </Links>
            </TextArea>
          </ImageTextDiv>
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
  height: 400px;
`;
const TextArea = styled.div`
  width: 500px;
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
