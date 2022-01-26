import React, { useState } from "react";
import Filter from "./Filter";
import List from "./List";
import { filterData } from "../../data/filterdata";
// import { catdata } from "../../data/catdata";
import { Row, Col } from "react-bootstrap";

const initialState = Object.fromEntries(
  Object.keys(filterData).map(key => {
    return [key, { selected: [], unselected: filterData[key] }];
  })
);

const FilterController = () => {
  const [filter, setFilter] = useState(initialState);

  const update = (filterType, newState) => {
    setFilter({
      ...filter,
      [filterType]: newState
    });
  };

  return (
    <Row>
      <Col md={3}>
        {Object.keys(filterData).map(item => (
          <>
            <Filter
              data={filter[item]}
              filterType={item}
              update={update}
              key={item}
            />
          </>
        ))}
      </Col>
      <Col md={9}>
        <List
          filters={filter}
        // filters={filter} 
        />
      </Col>
    </Row>
  );
};

export default FilterController;
