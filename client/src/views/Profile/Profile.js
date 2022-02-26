import { ProfileContainer } from "./Profile.style";
import LeftSide from "./LeftSide";
import Content from "./Content";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";

const StyledProfile = styled.div`
    width: 90%;
    margin: 5rem auto;
    height: 80rem;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
`;

const StyledHeader = styled.header`
    width: 100%;
    height: 30rem;
    background-color: blue;
    display: flex;
    flex-flow: row wrap;
`;

const StyledPicture = styled.div`
    flex: 0 1 50%;
    position: relative;
    .pic-container {
        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        background: white;
        position: absolute;
        left: 25%;
        top: 50%;
        transform: translate(-25%, -50%);
        overflow: hidden;
        .left-cercle {
            position: absolute;
            left: 30%;
            width: 100%;
            height: 100%;
            background: #f5f505;
        }
        .right-cercle {
            position: absolute;
            left: -70%;
            width: 100%;
            height: 100%;
            background: #f59505;
        }
        .background {
        }
    }
`;

const StyledInfo = styled.div`
    flex: 0 1 50%;
`;

const Profile = () => {
    return (
        <>
            <NavBar />
            <StyledProfile>
                <StyledHeader>
                    <StyledPicture>
                        <div className="pic-container">
                            <div className="left-cercle" />
                            <div className="right-cercle" />
                            <div className="background" />
                        </div>
                    </StyledPicture>
                    <StyledInfo></StyledInfo>
                </StyledHeader>
            </StyledProfile>
        </>
    );
};

export default Profile;
{
    /* <ProfileContainer>
    <LeftSide />
    <Content />
</ProfileContainer>; */
}
