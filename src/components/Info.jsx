import React from "react";
import useMainContext from "../hooks/useMainContext";
import { Table } from "semantic-ui-react";

import styled from "styled-components";

const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 200px;
  grid-gap: 10px;
`;

const StyledNameContainer = styled.div`
  text-align: center;
`;

const Info = ({ data }) => {
  const { id } = useMainContext();

  const currentData = data.get(id);

  return currentData ? (
    <StyledInfoContainer>
      {" "}
      {currentData.map(d => {
        return (
          <div key={d.nombre}>
            <StyledNameContainer>
              <h4>{d.nombre}</h4>
            </StyledNameContainer>
            <Table definition style={{ width: "100%" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>2017</Table.HeaderCell>
                  <Table.HeaderCell>2018</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>1er semestre</Table.Cell>
                  <Table.Cell>{d.semestre_1_2017}%</Table.Cell>
                  <Table.Cell>{d.semestre_1_2018}%</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2do semestre</Table.Cell>
                  <Table.Cell>{d.semestre_2_2017}%</Table.Cell>
                  <Table.Cell>{d.semestre_2_2018}%</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        );
      })}
    </StyledInfoContainer>
  ) : null;
};

export default Info;
