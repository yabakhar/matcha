import styled from 'styled-components';
export const RegisterFormStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 2rem;
    h1 {
        width: 100%;
        color: ${(props) => props.theme.colors.title};
        font-whieght: lighter;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        height: 100px;
        line-height: 140%;
        text-align: center;
    }
`;

export const SwitchToLogin = styled.div`
    margin-top: 2rem;
    background-image: linear-gradient(
        45deg,
        ${(props) => props.theme.colors.primary},
        ${(props) => props.theme.colors.secondary}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 1rem;
    cursor: pointer;
`;
