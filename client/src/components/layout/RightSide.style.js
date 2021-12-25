import styled from 'styled-components';
export const RightSideStyle = styled.div`
    /* flex: 0 0 50%; */
    width: 50%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    background: ${(props) => props.theme.background.secondary};
    &::before {
        content: '';
        position: absolute;
        box-shadow: inset 2000px 2000px 2000px rgba(255, 255, 255, 0.2);
        filter: blur(10px);
        width: 80%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        z-index: 50;
    }
    &::after {
        content: '';
        opacity: 0.6;
        position: absolute;
        width: 80%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        outline: 2px white solid;
        border-radius: 20px;
        z-index: 50;
    }
    svg {
        position: absolute;
        top: 30%;
        left: -50%;
        z-index: 10;
        opacity: 0.8;
    }
    overflow: hidden;
`;

export const EllipseLarge = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    z-index: 0;
    position: absolute;
    top: 5%;
    right: 5%;
    background: ${(props) => props.theme.colors.primary};
`;

export const Content = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column nowrap;
    padding: 2rem;
    .head {
        z-index: 100;
        width: 100%;
        flex: 0 0 50%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        .text {
            padding: 1rem;
            margin-top: 1.5rem;
            display: flex;
            flex-flow: column wrap;
            color: rgba(255, 255, 255, 0.8);
            font_size: 1.5rem;
            strong {
                display: flex;
                justify-content: flex-end;
                color: ${(props) => props.theme.colors.tertiary};
            }
        }
        .icone-quote {
            width: 100%;
            position: relative;
            svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 80px;
                & > * {
                    fill: ${(props) => props.theme.colors.tertiary};
                    width: 100%;
                }
            }
            &:nth-child(3) {
                svg {
                    left: 90%;
                    top: -80%;
                }
            }
        }
    }
    .swiper-container {
        .swipers {
            display: flex;
            width: 100px;
            justify-content: space-between;
            .cercle {
                width: 20px;
                height: 20px;
                background-color: #f7f7f7;
                opacity: 0.8;
                border-radius: 50%;
            }
            .active {
                opacity: 1;
                width: 50px;
                background-color: #f7f7f7;
                border-radius: 16px;
            }
        }
    }
`;
