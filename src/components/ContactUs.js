import React from "react";
import { contacts } from "../api/apiCalls";
import { Form, Input, /* InputNumber */ Button } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: "${label} is not validate email!",
  },
};

const ContactUs = () => {
  const [userData, updateData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [userURL, setURL] = React.useState("");

  const handleInput = (event) => {
    let input = event.target.name;
    let value = event.target.value;
    updateData({ ...userData, [input]: value });
  };

  const handleSubmit = (event) => {
    contacts.post("", userData).then((res) => {
      console.log(res);
      setURL(res.headers.location);
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={handleSubmit}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="name" onChange={handleInput} />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input name="email" onChange={handleInput} />
      </Form.Item>
      <Form.Item
        name={["user", "message"]}
        label="Message"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea name="message" onChange={handleInput} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Post Message
        </Button>
      </Form.Item>
      {userURL === "" ? (
        ""
      ) : (
        <p>
          You can see your post{" "}
          <a rel="noopener noreferrer" target="_blank" href={userURL}>
            here
          </a>
          .
        </p>
      )}
    </Form>
  );
};

export default ContactUs;
