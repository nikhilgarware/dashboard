import React from "react";
import { Row, Layout, Menu } from "antd";
import { CustomSider, CustomMenu } from "./SideBar.styled";
const { SubMenu } = Menu;
function SideBar() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <CustomSider>
          <CustomMenu theme={"dark"} mode="inline">
            <Menu.Item key="1">Menu 1</Menu.Item>
            <Menu.Item key="2">Menu 2</Menu.Item>
            <SubMenu title="Sub Menu">
              <Menu.Item key="3">Sub Menu Option1</Menu.Item>
              <Menu.Item key="4">Sub Menu Option2</Menu.Item>
              <Menu.Item key="5">Sub Menu Option3</Menu.Item>
            </SubMenu>
            <SubMenu title="Sub Menu 2">
              <Menu.Item key="6">Sub Menu Option4</Menu.Item>
              <Menu.Item key="7">Sub Menu Option5</Menu.Item>
              <Menu.Item key="8">Sub Menu Option6</Menu.Item>
            </SubMenu>
          </CustomMenu>
        </CustomSider>
      </Layout>
    </div>
  );
}

export default SideBar;
