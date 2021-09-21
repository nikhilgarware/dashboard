import { Layout, Menu } from "antd";
import styled from "styled-components";
const { Sider } = Layout;

export const CustomSider = styled(Sider)`
  display: "flex";
  background-color: ${(props) => props.theme["main-background"]};
`;

export const CustomMenu = styled(Menu)`
  background-color: ${(props) => props.theme["main-background"]};
  color: ${(props) => props.theme["font-color"]};
`;

export const CustomLayout = styled(Layout)`
  background-color: ${(props) => props.theme["container-background"]};
`;
