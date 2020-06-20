import React from "react";
import { Table } from "antd";
import { rickMorty } from "../api/apiCalls";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { columns: [], data: [] };
  }

  componentDidMount = () => {
    let data = this.props.data;
    rickMorty.get(data).then((res) => {
      let results = res.data.results;
      // eslint-disable-next-line default-case
      switch (data) {
        case "/episode":
          this.setState({
            columns: [
              { title: "Name", dataIndex: "name", key: "name" },
              { title: "Air Date", dataIndex: "airDate", key: "airDate" },
              { title: "Episode", dataIndex: "episode", key: "episode" },
            ],
            data: results.map((ep, index) => {
              return {
                key: index,
                name: ep.name,
                airDate: ep.air_date,
                episode: ep.episode,
              };
            }),
          });
          break;
        case "/character":
          this.setState({
            columns: [
              { title: "Image", dataIndex: "image", key: "image" },
              { title: "Name", dataIndex: "name", key: "name" },
              { title: "Status", dataIndex: "status", key: "status" },
              { title: "Species", dataIndex: "species", key: "species" },
            ],
            data: results.map((character, index) => {
              return {
                key: index,
                image: <img className="avatar" src={character.image} alt="" />,
                name: character.name,
                status: character.status,
                species: character.species,
              };
            }),
          });
          break;
        case "/location":
          this.setState({
            columns: [
              { title: "Name", dataIndex: "name", key: "name" },
              { title: "Type", dataIndex: "type", key: "type" },
              { title: "Dimension", dataIndex: "dimension", key: "dimension" },
            ],
            data: results.map((location, index) => {
              return {
                key: index,
                name: location.name,
                type: location.type,
                dimension: location.dimension,
              };
            }),
          });
          break;
        default:
          alert("dfsfsd");
      }
    });
  };

  render() {
    return <Table columns={this.state.columns} dataSource={this.state.data} />;
  }
}

export default DataTable;
