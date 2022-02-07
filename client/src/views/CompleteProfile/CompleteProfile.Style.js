import styled from "styled-components";

export const CompleteProfileContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  h1 {
    margin-bottom: 3rem;
    font-size: 2rem;
    background-color: red;
    background-image: linear-gradient(
      from left to right,
      "${(props) => props.theme.colors.primary}",
      "${(props) => props.theme.colors.secondary}"
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  .steper {
    width: 100%;
    flex: 0 0 80%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    &-steps {
      width: 100%;
      flex: 0 0 10%;
    }
  }
`;
