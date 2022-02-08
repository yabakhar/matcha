import styled from "styled-components";

export const StyledFirstStep = styled.div`
  width: 90%;
  textarea {
      resize: none;
    }
    .ant-input-textarea-show-count::after {
      font-size: 1rem;
    }
  .text-area {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    
    &__lab {
      margin: 2rem 0 1rem 0;
      flex : 0 0 70%;
      color: ${(props) => props.theme.colors.tertiary};
      font-size: 1.2rem;
    }
    .content--text-area {
      flex : 0 0 100%;
      height: 100px;
      display: flex;
      justify-content: flex-end;
      margin: 0rem 0 3rem 0;
      .ant-input-textarea {
        /* display: none; */
        height: 100%;
        width: 80%;
      }
    }
  }
  .content--userinfo {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    &__name {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      .name {
        width: 200px;
        /* min-width: 200px; */
        margin: 2rem 0 2rem 0;
      }
    }
    &__dateandgander {
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
      .gender {
        width: 100%;
        margin: 2rem 0 2rem 0;
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        height: 80px;
        .lab {
          height: 100%;
          flex: 0 0 20%;
          color: ${(props) => props.theme.colors.tertiary};
          display: flex;
          align-items: center;
          /* align-content: center; */
          font-size: 1.2rem;
        }
        .radiopicker {
          display: flex;
          flex: 0 0 80%;
          align-items: center;
          justify-content: space-between;
          span {
            flex: 0 0 30%;
            gap: 5%;
            font-size: 1rem;
          }
        }
      }
      .date {
        width: 100%;
        margin: 2rem 0 2rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* height: 80px; */
        .date--label {
          color: ${(props) => props.theme.colors.tertiary};
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          flex: 0 0 20%;
      }
      .ant-picker{
        flex: 0 0 60%;
      }
    }
  }
`;
