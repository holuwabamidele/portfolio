import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import dog from "../assets/dog.png";
import furn from "../assets/furn.png";
import lang from "../assets/lang.png";
import marv from "../assets/marv.png";
import doc from "../assets/doc.png";
import weather from "../assets/weather.png";
import done from "../assets/done.png";
import fabric from "../assets/fabric.png";

const Project = () => {
  const projectInfo = [
    {
      image: `${furn}`,
      title: "Furniture",
      description:
        "The Furniture site showcased different types of furnitures, also aspiring furniture makers can showcase their work on the page.",
      link: "https://furniture-2pd7.vercel.app/",
      git: "https://github.com/holuwabamidele/Furniture",
    },
    {
      image: `${dog}`,
      title: "Dog",
      description: "A dog site that shows different types of dogs.",
      link: "https://dog-wine.vercel.app/",
      git: "https://github.com/holuwabamidele/Dog",
    },
    {
      image: `${lang}`,
      title: "Langauge School",
      description:
        "The Language school has different people from different countries to teach their language to new learner.",
      link: "https://language-seven.vercel.app/",
      git: "https://github.com/holuwabamidele/Language",
    },
    {
      image: `${marv}`,
      title: "Movie Site",
      description:
        "The page was replicated with a colleague & the help of our instructor who taught & showed us how to go about it.",
      link: "https://movie-app-clone-smoky.vercel.app/",
      git: "https://github.com/holuwabamidele/movie",
    },
    {
      image: `${doc}`,
      title: "Medic",
      description:
        "A medic site that help search fora doctor, get a consultant, make an appointment and get solution.",
      link: "https://doctor-ui-lilac.vercel.app/",
      git: "https://github.com/holuwabamidele/Doctor-UI",
    },
    {
      image: `${weather}`,
      title: "Weather",
      description:
        "A weather app that help shows the current weather of different location.",
      link: "https://weather-iota-weld.vercel.app/",
      git: "https://github.com/holuwabamidele/weather",
    },
    {
      image: `${done}`,
      title: "123 Done",
      description:
        "Our company helps thousands of companies expand globally with unmatched speed and flexibilty",
      link: "https://123done.vercel.app/",
      git: "https://github.com/holuwabamidele/123done",
    },
    {
      image: `${fabric}`,
      title: "Fabric",
      description: "A U.I page showing different fashion products",
      link: "https://fabric-rho.vercel.app/",
      git: "https://github.com/holuwabamidele/fabric",
    },
  ];
  return (
    <div>
      <Container>
        <Wrapper>
          <section>
            <h1>FEATURED PROJECTS</h1>
            <p>
              Here are some of the projects that showcased what I <br /> have
              learned so far in front-end development
            </p>
          </section>
          {projectInfo.map((data, i) => (
            <ImageTextDiv key={i}>
              <ImageArea>
                <a href={data.link}>
                  <img src={data.image} alt="image" />
                </a>
              </ImageArea>
              <TextArea>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
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
                  <Link to={data.link} style={{ marginRight: "20px" }}>
                    <div style={{ color: "#D3E97A" }}>LIVE DEMO</div>
                  </Link>
                  <Link to={data.git}>
                    <div style={{ color: "#D3E97A" }}>
                      SEE ON GITHUB <FaGithub />
                    </div>
                  </Link>
                </Links>
              </TextArea>
            </ImageTextDiv>
          ))}
        </Wrapper>
      </Container>
      <hr />
    </div>
  );
};

export default Project;

const Container = styled.div`
  min-height: calc(100vh - 20vh);
  margin-top: 50px;
  background-color: black;
  overflow-x: hidden;
  /* margin-bottom: 100px; */
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
  margin: 100px 0px;
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
