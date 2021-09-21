import React from "react";
import { Menu } from "antd";
import { CustomSider, CustomMenu, CustomLayout } from "./SideBar.styled";
const { SubMenu } = Menu;
function SideBar() {
  return (
    <div>
      <CustomLayout style={{ minHeight: "100vh" }}>
        <CustomSider>
          <CustomMenu mode="inline">
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Report Analysis</Menu.Item>
            <SubMenu title="Monitoring">
              <Menu.Item key="3">Analytics</Menu.Item>
              <Menu.Item key="4">Graphical</Menu.Item>
            </SubMenu>
            <SubMenu title="Performances">
              <Menu.Item key="6">Positive Leads</Menu.Item>
              <Menu.Item key="7">Negative Leads</Menu.Item>
              <Menu.Item key="8">Neutral Leads</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">Listing</Menu.Item>
            <Menu.Item key="10">Profile</Menu.Item>
            <Menu.Item key="11">Results</Menu.Item>
            <Menu.Item key="12">Exception Controls</Menu.Item>
            <Menu.Item key="13">Account Management</Menu.Item>
          </CustomMenu>
        </CustomSider>
      </CustomLayout>
    </div>
  );
}

export default SideBar;
