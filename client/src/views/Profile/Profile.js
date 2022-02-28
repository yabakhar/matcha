import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import UserInfo from "./UserInfo";

const StyledProfile = styled.div`
    width: 90%;
    max-width: 1600px;
    margin: 5rem auto;
    height: auto;
    min-width: 350px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
    padding: 4rem 4rem 5rem 4rem;
    z-index: 50;
    @media (max-width: 750px) {
        width: 100% !important;
        padding: 1rem !important;
    }
`;

const StyledBioAndTags = styled.div`
    width: 100%;
    margin: 3rem 0;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    .container {
        flex: 1 1 40%;
        min-width: 300px;
        background-color: #f9f9f9;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
            rgba(0, 0, 0, 0.1) 0px 10px 10px;
        border-radius: 20px;
        transition: all 0.2s ease-in-out;
        &-header {
            font-size: 1rem;
            text-align: center;
            padding: 0.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #f8eded;
        }
        &-content {
            /* width: 100%; */
            flex: 1 1 50%;
            min-width: 300px;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            padding: 1rem;
            overflow: hidden;
            .tag {
                padding: 0.5rem 1.5rem;
                font-size: 1rem;
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
    width: 100%;
    min-width: 320px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
        rgba(0, 0, 0, 0.1) 0px 10px 10px;
    .head {
        min-height: 5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        align-items: end;
        background-color: white;
        .label {
            flex: 1 1 auto;
            position: relative;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 1rem 2rem;
            color: white;
            text-align: center;
            z-index: 10;
            color: ${(props) => props.theme.colors.placeholder};
        }
        .selected {
            color: ${(props) => props.theme.colors.primary};
            border-bottom: 1px solid ${(props) => props.theme.colors.primary};
        }
        .underline {
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
        }
    }
    .body {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
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
    /* min-height: 40rem; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10px;
    /* align-items: center; */
    .card {
        /* border: 2px solid black; */
        z-index: 100;
        flex: 0 0 30%;
        border-radius: 20px;
        min-width: 300px;
        height: 30rem;
        background-position: center;
        background-size: cover;
    }
`;
const StyledBody = styled(motion.div)`
    padding: 2rem;
    width: 100%;
    min-height: 60rem;
`;

const Gellery = () => {
    return (
        <StyledGelleryProfile>
            {images.map((image, index) => {
                return (
                    <div
                        key={index}
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
    min-height: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .map-container {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: 2px solid ${(props) => props.theme.colors.primary};
        border-radius: 20px;
        min-width: 300px;
        flex: 1 1 auto;
        height: 41rem;
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
    min-height: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const History = () => {
    return <StyledHistory>History</StyledHistory>;
};
const tabs = [
    { label: "Map", component: <Map /> },
    { label: "Gallery", component: <Gellery /> },
    { label: "History", component: <History /> },
];

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <>
            <NavBar />
            <StyledProfile>
                <UserInfo />
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
