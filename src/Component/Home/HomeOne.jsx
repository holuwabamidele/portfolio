import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import pic1 from "../../assets/pic1.jpg";
import { SiLinktree } from "react-icons/si";

const HomeOne = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TextArea>
            <h1>
              HI, I AM <br />
              ADEYEMI SERIKI.
            </h1>
            <p>
              A Nigeria based front-end developer, passionate about building{" "}
              <br />
              accessible and user friendly websites
            </p>
            <Contact>
              <button>CONTACT ME</button>
              <a href="https://github.com/holuwabamidele?tab=repositories">
                {" "}
                <div>
                  <FaGithub fontSize="20px" color="#D3E97A" />
                </div>
              </a>
              <a href="https://linktr.ee/bamidele9">
                <div>
                  <SiLinktree fontSize="20px" color="#D3E97A" />
                </div>
              </a>
            </Contact>
          </TextArea>
          <ImageArea>
            <img src={pic1} alt="Image" />
          </ImageArea>
        </Wrapper>
      </Container>
      <hr />
    </div>
  );
};

export default HomeOne;

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;

  /* @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  } */
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
const TextArea = styled.div`
  @media (max-width: 1124px) {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 50px;
    line-height: 60px;
    @media (max-width: 500px) {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;
const ImageArea = styled.div`
  /* width: 500px; */
  /* background-color: red; */
  img {
    width: 500px;
    object-fit: cover;
    border-radius: 20px;
    @media (max-width: 500px) {
      width: 300px;
    }
  }
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  button {
    background-color: #d3e97a;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    font-family: Sora;
    border: none;
    cursor: pointer;
  }
  div {
    margin: 0px 10px;
    background-color: #222222;
    border-radius: 50px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
