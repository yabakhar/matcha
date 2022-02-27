import { ProfileContainer } from "./Profile.style";
import LeftSide from "./LeftSide";
import Content from "./Content";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const StyledProfile = styled.div`
    width: 90%;
    margin: 5rem auto;
    height: auto;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
    /* padding: 4rem; */
    padding: 4rem 4rem 5rem 4rem;
`;

const StyledHeader = styled.header`
    width: 100%;
    /* height: 30rem; */
    /* background-color: blue; */
    display: flex;
    flex-flow: row wrap;
`;

const StyledPicture = styled.div`
    flex: 1 1 auto;
    position: relative;
    /* margin-left: 4rem; */
    .pic-container {
        width: 22rem;
        height: 22rem;
        border-radius: 50%;
        background: white;
        position: absolute;
        left: 25%;
        top: 50%;
        transform: translate(-25%, -50%);
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
            rgba(0, 0, 0, 0.22) 0px 10px 10px;
        .left-cercle {
            position: absolute;
            left: 30%;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                to bottom right,
                #ff416c,
                #ff4b2b
            );
        }
        .right-cercle {
            position: absolute;
            left: -55%;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                to bottom right,
                #ff416c,
                #ff4b2b
            );
        }
        .background {
            width: 98%;
            height: 98%;
            border-radius: 50%;
            background-color: black;
            z-index: 2;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
`;

const StyledInfo = styled.div`
    flex: 0 0 65%;
    min-width: 500px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 2rem 4rem;
    .item {
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f8eded;
        & > * {
            font-size: 1.1rem;
            color: ${(props) => props.theme.colors.text};
        }
        .label {
        }
        .starts {
            .icone {
                font-size: 1.5rem;
                margin: 0 0.2rem;
            }
            .fill {
                color: ${(props) => props.theme.colors.primary};
            }
        }
    }
`;

const StyledBioAndTags = styled.div`
    width: 100%;
    margin-top: 2rem;
    height: 14rem;
    /* background-color: ${(props) => props.theme.colors.primary}; */
    display: flex;
    flex-flow: row;
    gap: 50px;
    .container {
        flex: 1 1 50%;
        /* min-width: 300px; */
        height: 100%;
        background-color: #f9f9f9;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
            rgba(0, 0, 0, 0.1) 0px 10px 10px;
        border-radius: 20px;
        transition: all 0.2s ease-in-out;
        &-header {
            /* height: 2rem; */
            font-size: 1rem;
            text-align: center;
            padding: 0.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #f8eded;
        }
        &-content {
            width: 100%;
            /* height: 100%; */
            height: 80%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            padding: 1rem;
            overflow: hidden;
            .tag {
                padding: 0.5rem 1.5rem;
                font-size: 0.8rem;
                background-color: ${(props) => props.theme.colors.primary};
                color: white;
                border-radius: 20px;
                margin: 0.2rem 1rem;
                &::before {
                    content: "#";
                }
                transition: all 0.2s ease-in-out;
                &:hover {
                    background-color: ${(props) =>
                        props.theme.colors.secondary};
                    transform: scale(1.1);
                }
            }
        }
    }
`;

const StyledFooter = styled.footer`
    margin-top: 2rem;
    width: 100%;
    /* height: 30rem; */
    /* background: blue; */
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
        rgba(0, 0, 0, 0.1) 0px 10px 10px;
    .head {
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: end;
        background-color: white;
        /* background-image: ${(props) => props.theme.background.secondary}; */
        .label {
            position: relative;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 1rem 8rem;
            color: white;
            z-index: 10;
            color: ${(props) => props.theme.colors.placeholder};
        }
        .selected {
            color: ${(props) => props.theme.colors.primary};
            /* background: #fbe0d8; */
            border-bottom: 1px solid ${(props) => props.theme.colors.primary};
        }
        .underline {
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
            /* z-index: 50; */
            /* background: var(--accent); */
        }
    }
    .body {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: turquoise; */
    }
`;

const images = [
    {
        url: "https://images.unsplash.com/photo-1604436122917-66306388da12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1525337187502-a0dbdfb0286f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1507023490064-d1430fd147ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
];

const StyledGelleryProfile = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10px;
    .card {
        border: 2px solid black;
        z-index: 100;
        flex: 1 1 30%;
        min-width: 300px;
        height: 500px;
        background-position: center;
        background-size: cover;
    }
`;
const StyledBody = styled(motion.div)`
    padding: 2rem;
    width: 100%;
    height: 100%;
`;

const Gellery = () => {
    return (
        <StyledGelleryProfile>
            {images.map((image) => {
                return (
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${image.url})` }}
                    />
                );
            })}
        </StyledGelleryProfile>
    );
};

const StyledMap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .map-container {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: 2px solid ${(props) => props.theme.colors.primary};
        border-radius: 20px;
        min-width: 300px;
        flex: 1 1 auto;
        /* width: 100%; */
        height: 500px;
        a {
            display: none;
        }
    }
`;

const Map = () => {
    return (
        <StyledMap>
            <MapContainer
                className="map-container"
                center={{ lat: 51.505, lng: -0.09 }}
                zoom={13}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={{ lat: 51.505, lng: -0.09 }}></Marker>
            </MapContainer>
        </StyledMap>
    );
};

const StyledHistory = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const History = () => {
    return <StyledHistory>History</StyledHistory>;
};
const tabs = [
    { label: "Gallery", component: <Gellery /> },
    { label: "Map", component: <Map /> },
    { label: "History", component: <History /> },
];

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <>
            <NavBar />
            <StyledProfile>
                <StyledHeader>
                    <StyledPicture>
                        <div className="pic-container">
                            <div className="left-cercle" />
                            <div className="right-cercle" />
                            <div
                                className="background"
                                style={{
                                    backgroundImage: `url("https://images.unsplash.com/photo-1516522973472-f009f23bba59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
                                }}
                            />
                        </div>
                    </StyledPicture>
                    <StyledInfo>
                        <div className="item">
                            <div className="label">Fame Rating</div>
                            <div className="value">
                                <div className="starts">
                                    {[1, 2, 3].map((item, index) => (
                                        <AiFillStar
                                            key={index}
                                            className="icone fill"
                                        />
                                    ))}
                                    {[1, 2].map((item, index) => (
                                        <AiOutlineStar
                                            key={index}
                                            className="icone"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="label">User Name</div>
                            <div className="value">Farwila</div>
                        </div>
                        <div className="item">
                            <div className="label">Full Name</div>
                            <div className="value">Bigola Lfarwila</div>
                        </div>
                        <div className="item">
                            <div className="label">Gender</div>
                            <div className="value">Male</div>
                        </div>
                        <div className="item">
                            <div className="label">Age</div>
                            <div className="value">30</div>
                        </div>
                        <div className="item">
                            <div className="label">Sexual Preferences</div>
                            <div className="value">Female</div>
                        </div>
                    </StyledInfo>
                </StyledHeader>
                <StyledBioAndTags>
                    <div className="container">
                        <div className="container-header">
                            List Of Interests
                        </div>
                        <div className="container-content">
                            <div className="tag">bigola</div>
                            <div className="tag">basla</div>
                            <div className="tag">btata</div>
                            <div className="tag">3jina</div>
                            <div className="tag">kan yamakan</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="container-header">Biography</div>
                        <div className="container-content">
                            Le Lorem Ipsum est simplement du faux texte employé
                            dans la composition et la mise en page avant
                            impression. Le Lorem Ipsum est le faux texte
                            standard de l'imprimerie depuis les années 1500,
                            quand un imprimeur anonyme assembla ensemble des
                            morceaux de texte pour réaliser un livre spécimen de
                        </div>
                    </div>
                </StyledBioAndTags>
                <StyledFooter>
                    <StyledFooter>
                        <div className="head">
                            {/* <div className="selected"></div> */}
                            {tabs.map((item, index) => (
                                <div
                                    onClick={() => {
                                        setSelectedTab(index);
                                        console.log(item);
                                    }}
                                    key={index}
                                    className={
                                        index === selectedTab
                                            ? "label selected"
                                            : "label"
                                    }
                                >
                                    {item.label}
                                    {index === selectedTab ? (
                                        <motion.div
                                            className="underline"
                                            layoutId="underline"
                                        />
                                    ) : null}
                                </div>
                            ))}
                            {/* <div className="label">Gallery</div> */}
                            {/* <div className="label selected">Map</div> */}
                            {/* <div className="label">History</div> */}
                        </div>
                        <div className="body">
                            <AnimatePresence exitBeforeEnter>
                                <StyledBody
                                    key={selectedTab}
                                    animate={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {tabs[selectedTab].component}
                                    {/* {selectedTab ? selectedTab.icon : "😋"} */}
                                </StyledBody>
                            </AnimatePresence>
                        </div>
                    </StyledFooter>
                </StyledFooter>
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

{
    /* <div className="user-info-rating"></div> */
}
{
    /* <div className="user-info-username"></div> */
}
{
    /* <div className="user-info-fullname"></div> */
}
{
    /* <div className="user-info-gender"></div> */
}
{
    /* <div className="user-info-sexualpreferences"></div> */
}
