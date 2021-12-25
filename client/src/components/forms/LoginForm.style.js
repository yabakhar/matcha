import styled from 'styled-components';
export const LoginFromStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    /* justify-content: space-between; */
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
`;

export const FormStyle = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    input[type='submit'] {
        margin-top: 2rem;
        width: 50%;
        height: 60px;
        border: none;
        border-radius: 10px;
        background-image: linear-gradient(
            to right,
            ${(props) => props.theme.colors.primary},
            ${(props) => props.theme.colors.secondary}
        );
        font-size: 1.3rem;
        color: white;
    }
    .form__group {
        height: 80px;
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 50%;
    }
    .form__field {
        width: 100%;
        border: 0;
        border-bottom: 1px solid ${(props) => props.theme.colors.placeholder};
        outline: 0;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.text};
        padding: 20px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ .form__label {
            font-size: 1rem;
            cursor: text;
            top: 20px;
        }
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.placeholder};
    }

    .form__field:focus {
        ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            background-image: linear-gradient(
                45deg,
                ${(props) => props.theme.colors.primary},
                ${(props) => props.theme.colors.secondary}
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            font-weight: 400;
        }
        padding-bottom: 6px;
        font-weight: 400;
        border-width: 3px;
        border-image: linear-gradient(
            to right,
            ${(props) => props.theme.colors.primary},
            ${(props) => props.theme.colors.secondary}
        );
        border-image-slice: 1;
    }
    /* reset input */
    .form__field {
        &:required,
        &:invalid {
            box-shadow: none;
        }
    }
`;

export const HelpersStyle = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    margin-top: 2rem;
    p {
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        color: ${(props) => props.theme.colors.text};
        margin: 0.8rem 0;
        font-weight: 400;
        span {
            color: ${(props) => props.theme.colors.primary};
        }
    }
`;

export const FooterStyle = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .social {
        margin-top: 1rem;
        width: 50%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.placeholder};
        p {
            text-align: center;
            width: 50%;
            z-index: 10;
            /* display: none; */
            background: white;
        }
        position: relative;
        .line {
            z-index: 0;
            position: absolute;
            top: 50%;
            width: 100%;
            border-bottom: solid 1px
                ${(props) => props.theme.colors.placeholder};
        }
    }
    .google {
        margin: 1rem 0;
        width: 50%;
        /* background-color: #4285f4; */
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${(props) => props.theme.colors.placeholder};
        border-radius: 10px;
        p {
            padding: 0 1rem;
        }
        svg {
            width: 30px;
            height: 30px;
        }
    }
`;
