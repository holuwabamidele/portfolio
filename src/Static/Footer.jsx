import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <h1>LET US CONNECT</h1>
          <p>
            Say hello at{" "}
            <a href="https://gmail.com/">Oluwabamidele1@gmail.com</a>
          </p>
          <a href="https://github.com/holuwabamidele?tab=repositories">
            <div>
              <FaGithub style={{ color: "#d3e97a", fontSize: "20px" }} />
            </div>
          </a>
        </Text>
        <InputDiv>
          <p style={{ lineHeight: "0px" }}>Name</p>
          <input type="text" placeholder="Name" />
          <br />
          <p style={{ lineHeight: "0px" }}>Email</p>
          <input type="email" placeholder="Email" />
          <br />
          <p style={{ lineHeight: "0px" }}>Subject</p>
          <input type="text" placeholder="Subject" />
          <br />
          <p style={{ lineHeight: "0px" }}>Message</p>
          <textarea placeholder="Message"></textarea>
          <br />
          <button>SUBMIT</button>
        </InputDiv>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: black;
  /* margin: 100px 0px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  margin: 50px 0px;
  color: white;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
  margin-bottom: 20px;
  div {
    margin: 0px 10px;
    background-color: #222222;
    border-radius: 50px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const InputDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 80%;
    margin-top: 30px;
  }
  /* background-color: red; */
  input {
    @media (max-width: 500px) {
      width: 100%;
    }
    padding-left: 10px;
    width: 500px;
    background-color: #eee;
    height: 40px;
    outline: none;
    border: none;
  }
  textarea {
    @media (max-width: 500px) {
      width: 100%;
    }
    height: 150px;
    width: 500px;
    resize: vertical;
  }
  button {
    height: 30px;
    width: 80px;
    border-radius: 20px;
    border: none;
    background-color: #d3e97a;
    font-size: 10px;
    font-family: Sora;
    cursor: pointer;
  }
`;
