import React, { useState } from "react";
import { Form } from "react-bootstrap";

const FilterCheck = ({ children, click }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Form.Check type="checkbox" onClick={() => click()}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
      }} id={children} label={children} />
  );
};

export default FilterCheck;
