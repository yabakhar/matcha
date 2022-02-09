import styled from "styled-components";

export const StyledSecondStep = styled.div`
    width: 100%;
    /* height: 1000px; */
    /* background-color: red; */
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .profile-picture {
        border: solid 5px ###dcdde1;
        position: relative;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #192a56;
        .profile-background {
            position: absolute;
            top: 50%;
            left: 50%;
            color: #f5f6fa;
            font-size: 2rem;
            /* width: 100%; */
            /* height: 100%; */
            transform: translate(-50%, -50%);
        }
    }
`;
