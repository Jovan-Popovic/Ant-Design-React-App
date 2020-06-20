import React from "react";
import { Select, Button, notification } from "antd";
import DataTable from "./Table";

const { Option } = Select;

const RickMorty = () => {
  const [tableProp, getTableProp] = React.useState("");
  const [isClicked, clicked] = React.useState(false);

  const updateTableProp = (value) => getTableProp(value);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Nothing is Selected",
      description:
        "You have to select something before you get table with data.",
    });
  };

  const ShowTable = () =>
    isClicked ? (
      tableProp ? (
        <DataTable data={tableProp} />
      ) : (
        () => openNotificationWithIcon("warning")
      )
    ) : (
      ""
    );

  return (
    <React.Fragment>
      <Select onChange={updateTableProp} style={{ width: 200 }}>
        <Option value="/episode">Episodes</Option>
        <Option value="/character">Characters</Option>
        <Option value="/location">Locations</Option>
      </Select>
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => {
          clicked(true);
        }}
      >
        Get Rick & Morty Data
      </Button>
      <ShowTable />
    </React.Fragment>
  );
};

export default RickMorty;
