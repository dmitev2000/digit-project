import { createContext, useState } from "react";

const CoordinatesContext = createContext({
  latitude: 0,
  longitude: 0,
  setCoords: () => {}
});

export function CoordinatesContextProvider(props) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  function setCoords(lat, lon) {
   setLatitude(lat);
   setLongitude(lon);     
  }

  const context = {
    latitude: latitude,
    longitude: longitude,
    setCoords: setCoords,
  };

  return (
    <CoordinatesContext.Provider value={context}>
      {props.children}
    </CoordinatesContext.Provider>
  );
}

export default CoordinatesContext;