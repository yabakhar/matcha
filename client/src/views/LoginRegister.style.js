import styled from 'styled-components';

export const ContainerStyle = styled.div`
    width: 90%;
    max-width: 1800px;
    height: 1000px;
    padding-top: 40px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    border-radius: 20px;
    overflow: hidden;
`;

export const LeftSideStyle = styled.div`
    flex: 0 0 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .logo {
        flex: 1 1 10%;
    }
`;

export const FromsStyle = styled.div`
    width: 100%;
    flex: 1 1 80%;
`;

export const CopyrightStyle = styled.div`
    color: ${(props) => props.theme.colors.placeholder};
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    flex: 1 1 10%;
    width: 100%;
    display: flex;
    justify-content: center;
`;
