import React from "react";
import { Select, Button } from "antd";
import DataTable from "./Table";

const { Option } = Select;

const RickMorty = () => {
  const [tableProp, getTableProp] = React.useState({
    display: false,
    data: "/episode",
  });

  const getTable = (value) => {
    getTableProp({ ...tableProp, data: value });
  };

  return (
    <React.Fragment>
      <Select onChange={getTable} style={{ width: 200 }}>
        <Option value="/episode">Episodes</Option>
        <Option value="/character">Characters</Option>
        <Option value="/location">Locations</Option>
      </Select>
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => getTableProp({ ...tableProp, display: true })}
      >
        Submit
      </Button>
      {tableProp.display ? <DataTable data={tableProp.data} /> : ""}
    </React.Fragment>
  );
};

export default RickMorty;
