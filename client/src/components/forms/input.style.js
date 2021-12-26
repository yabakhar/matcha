import styled from 'styled-components';
export const FormGroupStyle = styled.div`
    height: 80px;
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
`;

export const FormFieldStyle = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.placeholder};
    outline: 0;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};
    padding: 20px 0px;
    padding-left: 10px;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ label {
        font-size: 1rem;
        cursor: text;
        top: 20px;
    }
    &:focus {
        ~ label {
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
    &:required,
    &:invalid {
        box-shadow: none;
    }
`;

export const FormLabelStyle = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.placeholder};
`;

export const FormStyle = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;
