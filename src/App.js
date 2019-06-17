import React from "react";

import useData from "./hooks/useData";
import Chart from "./components/Chart";
import styled from "styled-components";
import { MainContextProvider } from "./mainContext";
import Info from "./components/Info";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 600px 600px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-top: 90px;
`;

const ChartContainerLeft = styled.div`
  grid-column: 1 / 2;
`;

const App = () => {
  const data = useData();

  console.log(data ? data[1].get(1) : null);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Mapa de la pobreza (2017 - 2018)</h1>
      <h2>
        Pobreza en hogares{" "}
        <span role="img" aria-label="house">
          🏠️
        </span>{" "}
        por región (en porcentajes)
      </h2>
      <h3>
        Fuente:{" "}
        <a href="https://www.indec.gob.ar/" target="_blank">
          Indec
        </a>
      </h3>
      {data ? (
        <StyledContainer>
          <MainContextProvider>
            <ChartContainerLeft>
              <Chart width={400} height={800} data={data[0]} />
            </ChartContainerLeft>

            <Info data={data[1]} />
          </MainContextProvider>
        </StyledContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default App;
