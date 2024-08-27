import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import furn from "../../assets/furn.png";

const HomeTwo = () => {
  return (
    <Container>
      <Wrapper>
        <section>
          <h1>FEATURED PROJECTS</h1>
          <p>
            Here are some of the projects that showcased what I <br /> have
            learned so far in front-end development
          </p>
        </section>
        <ImageTextDiv>
          <ImageArea>
            <a href="https://furniture-2pd7.vercel.app/">
              <img src={furn} alt="image" />
            </a>
          </ImageArea>
          <TextArea>
            <h3>Furniture</h3>
            <p>
              The Furniture site showcased different types of furnitures, also
              aspiring furniture makers can showcase their work on the page.
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
                to="https://furniture-2pd7.vercel.app/"
                style={{ marginRight: "20px" }}
              >
                <div style={{ color: "#D3E97A" }}>LIVE DEMO</div>
              </Link>
              <Link to="https://github.com/holuwabamidele/Furniture">
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

export default HomeTwo;

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
  /* background-color: red; */
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
