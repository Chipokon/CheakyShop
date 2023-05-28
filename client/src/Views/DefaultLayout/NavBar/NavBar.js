import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, MenuProps } from "antd";
import { Menu } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
const items = [
  {
    label: "Сообщения",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Сервисы",
    key: "app",
    icon: <AppstoreOutlined/>,

  },
  {
    label: "Профиль",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    type: "label",
    label: "UserNAMe",
    key: "profile",
  },
  {
    type: "label",
    label: "Еще категории",
  },

  {
    type: "signIn",
    label: (
      <Button>
        <Link to="cheakyShop/signIn">Sign in </Link>
      </Button>
    ),
  },
  {
    type: "signUp",
    label: (
      <Button>
        <Link to="cheakyShop/signUp">Sign up</Link>
      </Button>
    ),
  },
];

const NavBar = observer(() => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    // console.log("click ", e);

    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
});

export default NavBar;
