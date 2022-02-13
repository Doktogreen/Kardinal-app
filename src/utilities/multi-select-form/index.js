import React from "react";
import Select from 'react-select'

export const MultiSelect = (props) => (
  <Select isMulti options={props.option} />
)