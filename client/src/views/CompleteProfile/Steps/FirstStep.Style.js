import styled from "styled-components";

export const StyledFirstStep = styled.div`
  width: 90%;
  textarea {
      resize: none;
  }
  .ant-input-textarea-show-count::after {
    font-size: 1rem;
  }
  .tags-and-biography {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    &__tags {
      flex : 0 0 50%;
      min-width: 300px;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      &--input{
        font-size: 1.2rem;
        display: flex;
        margin: 1rem 0;
        width: 80%;
        margin: 2rem 0 2rem 0;
        .mui-input {
          width: 100%;
        }
      }
      &--container {
        width: 80%;
        display: flex;
        gap : 20px;
        flex-wrap: wrap;
      }
    }
    &__biography {
      flex : 0 0 50%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      &--label {
        width: 100%;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.tertiary};
        margin: 2rem 0 2rem 0;
      }
      &--textarea {
        width: 100%;
        height: 100px;
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
        width: 80%;
        /* width: 00px; */
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
