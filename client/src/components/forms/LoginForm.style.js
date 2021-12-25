import styled from 'styled-components';
export const LoginFromStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    h1 {
        width: 100%;
        color: ${(props) => props.theme.colors.title};
        font-whieght: lighter;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        height: 100px;
        line-height: 140%;
        display: flex;
        flex-flow: column wrap;
        text-align: center;
    }
    .ant-form {
        width: 100%;
        height: 100%;
    }
`;
