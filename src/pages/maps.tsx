import React from "react";
import dynamic from "next/dynamic";
// import Mapss from "@/components/maps/index";
const MapLocation = dynamic(() => import("@/components/maps/index"), {
  ssr: false,
});

const Maps = () => {
  return (
    <div>
      <MapLocation />
    </div>
  );
};

export default Maps;
