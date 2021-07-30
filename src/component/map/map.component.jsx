import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faPrescriptionBottleAlt,
  faMapMarker,
  faMapPin,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import "./map.styless.scss";

import mapboxgl from "mapbox-gl/dist/mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;


function Map({ stores, handleOnChange }) {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 15,
  });
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setViewport({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        width: 800,
        height: 400,
        zoom: 15,
      });
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${viewport.longitude},${viewport.latitude}.json?access_token=pk.eyJ1IjoibW9oYW1lZC1vdGhtYW4iLCJhIjoiY2tycTJsNHZyMDNveTJ1cHE2Mjhua3ZlMSJ9.tQ7a_wvunatfqvzNfxACFg`
    )
      .then((res) => res.json())
      .then((data) => handleOnChange(data));
  }, [viewport, handleOnChange]);

  const renderIcons = (store) => {
    if (store.type === "Restaurant") {
      return (
        <div>
          <div
            style={{ display: "inline-block", position: "relative" }}
            onMouseOver={() => {
              setSelectedPlace(store);
            }}
            onMouseLeave={() => {
              setSelectedPlace(null);
            }}
          >
            <FontAwesomeIcon
              style={{ fontSize: "3rem" }}
              icon={faMapMarker}
              color="orange"
            />
            <FontAwesomeIcon
              icon={faUtensils}
              style={{
                position: "absolute",
                left: "50%",
                top: "40%",
                transform: "translate(-50%,-50%)",
                color: "white",
                zIndex: "10",
                fontSize: "1.2rem",
              }}
            />{" "}
          </div>

          <h6>{store.name}</h6>
        </div>
      );
    } else if (store.type === "Supermarket") {
      return (
        <div>
          <div
            style={{ display: "inline-block", position: "relative" }}
            onMouseOver={() => {
              setSelectedPlace(store);
            }}
            onMouseLeave={() => {
              setSelectedPlace(null);
            }}
          >
            <FontAwesomeIcon
              style={{ fontSize: "3rem" }}
              icon={faMapMarker}
              color="blue"
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{
                position: "absolute",
                left: "50%",
                top: "40%",
                transform: "translate(-50%,-50%)",
                color: "white",
                zIndex: "10",
                fontSize: "1.2rem",
              }}
            />{" "}
          </div>

          <h6>{store.name}</h6>
        </div>
      );
    } else {
      return (
        <div>
          <div
            style={{ display: "inline-block", position: "relative" }}
            onMouseOver={() => {
              setSelectedPlace(store);
            }}
            onMouseLeave={() => {
              setSelectedPlace(null);
            }}
          >
            <FontAwesomeIcon
              style={{ fontSize: "3rem" }}
              icon={faMapMarker}
              color="red"
            />
            <FontAwesomeIcon
              icon={faPrescriptionBottleAlt}
              style={{
                position: "absolute",
                left: "50%",
                top: "40%",
                transform: "translate(-50%,-50%)",
                color: "white",
                zIndex: "10",
                fontSize: "1.2rem",
              }}
            />
          </div>

          <h6>{store.name}</h6>
        </div>
      );
    }
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoibW9oYW1lZC1vdGhtYW4iLCJhIjoiY2tycTJsNHZyMDNveTJ1cHE2Mjhua3ZlMSJ9.tQ7a_wvunatfqvzNfxACFg"
      mapStyle="mapbox://styles/mohamed-othman/ckrq2ucg24n8e18tdscgx5g00"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
        <FontAwesomeIcon
          style={{ fontSize: "3rem" }}
          icon={faMapPin}
          color="yellow"
        />
      </Marker>

      {stores.map((store) => {
        return (
          <Marker
            key={store.id}
            latitude={store.latitude}
            longitude={store.longitude}
          >
            {renderIcons(store)}
          </Marker>
        );
      })}
      {selectedPlace ? (
        <Popup
          latitude={selectedPlace.latitude}
          longitude={selectedPlace.longitude}
          onClose={() => {
            setSelectedPlace(null);
          }}
        >
          <div className="popup">
            <div className="popup__image">
              <img
                src={selectedPlace.baseLink + "/" + selectedPlace.image}
                alt=""
              />
            </div>
            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.type}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}
export default Map;
