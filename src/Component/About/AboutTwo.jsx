import styled from "styled-components";

const AboutTwo = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>MY EXPERIENCE</h1>
          <section>
            <main>
              <h3>TechCampus Africa</h3>
              <h4>Apr 2024 - Aug 2024</h4>
            </main>
            <p>
              Techcampus Africa offers beginner-friendly, and practical
              trainings that <br /> help students get hired and build a
              rewarding tech career.
            </p>
          </section>
        </Wrapper>
      </Container>
      <hr />
    </div>
  );
};

export default AboutTwo;

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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  main {
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px) {
      flex-direction: column;
      line-height: 0px;
    }
  }
`;
