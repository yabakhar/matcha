import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ThirdStepStyle } from "./ThirdStep.Style";

const ThirdStep = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log({ coords: position.coords });
    });

    return (
        <ThirdStepStyle>
            <MapContainer
                className="map-container"
                center={[51.505, -0.09]}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </ThirdStepStyle>
    );
};

export default ThirdStep;
