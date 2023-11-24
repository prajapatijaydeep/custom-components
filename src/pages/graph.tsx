import dynamic from "next/dynamic";
import React from "react";

const Graph = dynamic(() => import("@/components/graph/index"), {
  ssr: false,
});

const graph = () => {
  return <Graph />;
};

export default graph;
