import { useRouter } from "next/router";
import React from "react";
import { Accordion } from "react-bootstrap";
import FilterCheck from "./FilterCheck";

const addTodata = (arr, item) => arr.concat([item]).sort();
const removeFromdata = (arr, item) =>
  arr.filter(el => {
    return el !== item;
  });

const Filter = ({ data, filterType, update }) => {
  const noFilters = data.selected.length === 0;
  console.log(data);
  const router = useRouter();
  const { category } = router.query;

  const dataArr = noFilters
    ?
    data.unselected.map(i => [i, false])
    : data.selected
      .map(i => [i, true])
      .concat(data.unselected.map(i => [i, false]))
      .sort();

  return (
    <>
      <Accordion defaultActiveKey={['0']} className="mb-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{filterType} #{category}</Accordion.Header>
          <Accordion.Body>
            {dataArr.map(item => {
              return (
                <FilterCheck
                  active={item[1]}
                  click={() => {
                    update(filterType, {
                      selected: item[1]
                        ? removeFromdata(data.selected, item[0])
                        : addTodata(data.selected, item[0]),
                      unselected: item[1]
                        ? addTodata(data.unselected, item[0])
                        : removeFromdata(data.unselected, item[0])
                    });
                  }}
                  key={item[0].replace(/ /g, "")}
                >
                  {item[0]}
                </FilterCheck>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Filter;
