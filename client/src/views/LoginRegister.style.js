import styled from 'styled-components';

export const ContainerStyle = styled.div`
    width: 90%;
    height: 1200px;
    margin: 50px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    border-radius: 20px;
    overflow: hidden;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
`;

export const LeftSideStyle = styled.div`
    flex: 0 0 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 5rem;
    /* justify-content: center; */
`;

export const FromsStyle = styled.div`
    width: 100%;
    flex: 1 1 50%;
    min-height: 800px;
    /* background-color: tomato; */
`;

export const CopyrightStyle = styled.div`
    color: ${(props) => props.theme.colors.placeholder};
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
