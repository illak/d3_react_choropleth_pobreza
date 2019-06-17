import React, { useMemo } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import styled from "styled-components";
import useMainContext from "../hooks/useMainContext";

const StyledProv = styled.path`
  fill: #eee;
  stroke: #999;
  cursor: pointer;

  :hover {
    fill: orange;
  }
`;

const StyledSvg = styled.svg`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Chart = ({ width, height, data }) => {
  const { id, setId, setInfo } = useMainContext();

  const projection = useMemo(
    () =>
      d3
        .geoMercator()
        .fitSize(
          [width, height],
          topojson.feature(data, data.objects.ARG_adm1)
        ),
    [data, width, height]
  );

  const path = d3.geoPath().projection(projection);

  //console.log(data.objects.ARG_adm1);
  //console.log(topojson.feature(data, data.objects.ARG_adm1));
  const handleMouseClick = (id, name) => {
    setId(id);
    setInfo({ name: name });
  };

  return (
    <StyledSvg width={width} height={height}>
      <g>
        {topojson.feature(data, data.objects.ARG_adm1).features.map(f => {
          const fId = f.properties.ID_1;
          const fName = f.properties.NAME_1;
          //const centroid = path.centroid(f);

          return (
            <StyledProv
              key={fId}
              d={path(f)}
              onClick={() => handleMouseClick(fId, fName)}
            >
              <title>{fName}</title>
            </StyledProv>
          );
        })}
      </g>
    </StyledSvg>
  );
};

export default Chart;
