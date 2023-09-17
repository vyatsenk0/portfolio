import {
    Annotation,
    ComposableMap,
    Geographies,
    Geography,
  } from "react-simple-maps";
  
  const MapChart = () => {
    return (
      <div>
        <ComposableMap
          style={{ height: "100%", width: "100%" }}
          projectionConfig={{ scale: 350, center: [-60, 35] }}
        >
          <Geographies
            geography="/features.json"
            fill="#ff73001d"
            stroke="#FFF"
            strokeWidth={0.5}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Annotation
            subject={[-80.3522, 45.8566]}
            dx={-30}
            dy={-35}
            connectorProps={{
              stroke: "#FFF",
              strokeWidth: 2,
              strokeLinecap: "round",
            }}
          >
            <text
              x="-8"
              y="-8"
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="#FFF"
            >
              {"Toronto"}
            </text>
          </Annotation>
        </ComposableMap>
      </div>
    );
  };
  
  export default MapChart;
  