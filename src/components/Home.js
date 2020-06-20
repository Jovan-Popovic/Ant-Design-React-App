import React from "react";
import { Link } from "react-router-dom";
import { Row, Card } from "antd";
import { users } from "../api/apiCalls";
import "../antd/dist/antd.less";

const { Meta } = Card;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
    };
  }

  componentDidMount = () => {
    users
      .get()
      .then((res) => this.setState({ usersData: res.data.slice(0, 12) }));
  };

  render() {
    return (
      <React.Fragment>
        <h1>First 12 github users</h1>
        <Row>
          {this.state.usersData.map((user, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="" src={user.avatar_url} />}
            >
              <Meta
                title={`Username: ${user.login}`}
                description={`Followers: ${user.followers_url.length}`}
              />
            </Card>
          ))}
        </Row>
        <p>
          Link to Login page <Link to="/login">here</Link>.
        </p>
        <p>
          Link to Dashboard page <Link to="/dashboard">here</Link>. Note: You
          have to be logged in before going on this page
        </p>
      </React.Fragment>
    );
  }
}

export default Home;
