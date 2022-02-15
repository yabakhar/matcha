import { useEffect, useState } from "react";
import { ThirdStepStyle } from "./ThirdStep.Style";
import CircularProgress from "@mui/material/CircularProgress";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMapEvents,
} from "react-leaflet";

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click(e) {
            map.locate();
            console.log(e.latlng);
            setPosition(e.latlng);
        },
        locationfound(e) {
            console.log("location found:", location);
            // console.log("bigola");
            // setPosition(e.latlng);
            // map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : <Marker position={position}></Marker>;
}

const ThirdStep = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setCoords([position.coords.latitude, position.coords.longitude]);
            setLoad(false);
        },
        () => {
            setError(true);
            setLoad(false);
        }
    );
    // const [position, setPosition] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [coords, setCoords] = useState([0, 0]);
    useEffect(() => {
        console.log("coords", coords);
    }, [coords]);

    const addMarker = (e) => {
        console.log(e.latlng);
    };
    return (
        <ThirdStepStyle>
            {!load ? (
                !error ? (
                    <MapContainer
                        className="map-container"
                        center={coords}
                        zoom={13}
                    >
                        <TileLayer
                            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={coords}></Marker>
                    </MapContainer>
                ) : (
                    <MapContainer
                        onClick={addMarker}
                        className="map-container"
                        center={{ lat: 51.505, lng: -0.09 }}
                        zoom={13}
                    >
                        <TileLayer
                            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker />
                    </MapContainer>
                )
            ) : (
                <CircularProgress />
            )}
        </ThirdStepStyle>
    );
};

export default ThirdStep;
