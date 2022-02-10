import { StyledSecondStep } from "./SecondStepStyle";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { actionTypes } from "../index";
const SecondStep = ({ state, dispatch }) => {
    const {
        secondStep: { gallery: gallery, profilePicture: profilePicture },
    } = state;
    const [clear, setClear] = useState("");

    console.log(gallery);
    const handleChange = (e) => {
        let file = e.target.files[0];
        setClear(file);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            if (e.currentTarget.result.match("data:image.*")) {
                dispatch({
                    type: actionTypes.secondStep.gallery,
                    gallery: [
                        ...gallery,
                        gallery.length == 0
                            ? {
                                  isProfilePicture: true,
                                  url: e.currentTarget.result,
                              }
                            : {
                                  isProfilePicture: false,
                                  url: e.currentTarget.result,
                              },
                    ],
                });
                if (gallery.length == 0) {
                    dispatch({
                        type: actionTypes.secondStep.profilePicture,
                        profilePicture: e.currentTarget.result,
                    });
                }
            }
        };

        setClear("");
    };
    return (
        <StyledSecondStep>
            {gallery.length === 0 ? (
                <div className="profile-picture">
                    <div className="cercle" />
                    <p className="profile-pic">Profile Picture</p>
                    <p className="indice"> select photo</p>
                </div>
            ) : (
                <div className="profile-picture">
                    <div
                        className="cercle"
                        style={{
                            backgroundImage: `url("${profilePicture}")`,
                        }}
                    />
                    <p className="profile-pic">Profile Picture</p>
                </div>
            )}

            <div className="galerie">
                {gallery.length > 0 &&
                    gallery.map((item, index) => (
                        <div key={index} className="gallery">
                            <div
                                className="galerie--image"
                                style={{
                                    backgroundImage: `url("${item.url}")`,
                                }}
                            />
                            <div className="galerie--image__footer">
                                {!item.isProfilePicture && (
                                    <p
                                        onClick={() => {
                                            gallery.forEach((item, id) => {
                                                if (
                                                    gallery[id]
                                                        .isProfilePicture &&
                                                    index !== id
                                                ) {
                                                    gallery[
                                                        id
                                                    ].isProfilePicture = false;
                                                }
                                                if (index === id) {
                                                    gallery[
                                                        id
                                                    ].isProfilePicture = true;
                                                }
                                            });
                                            dispatch({
                                                type: actionTypes.secondStep
                                                    .gallery,
                                                gallery: [...gallery],
                                            });
                                            dispatch({
                                                type: actionTypes.secondStep
                                                    .profilePicture,
                                                profilePicture:
                                                    gallery[index].url,
                                            });
                                        }}
                                    >
                                        make as profile picture
                                    </p>
                                )}
                                <p
                                    onClick={() => {
                                        gallery.splice(index, 1);
                                        dispatch({
                                            type: actionTypes.secondStep
                                                .gallery,
                                            gallery: [...gallery],
                                        });
                                    }}
                                >
                                    delete
                                </p>
                            </div>
                        </div>
                    ))}
                {gallery.length < 5 && (
                    <div
                        className="add-card"
                        style={{ backgroundColor: "#bdc3c7" }}
                    >
                        <AiFillPlusCircle className="galerie--image--add" />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            value={clear}
                        />
                    </div>
                )}
            </div>
        </StyledSecondStep>
    );
};

export default SecondStep;
