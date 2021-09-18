import { Layout, Menu } from "antd";
import styled from "styled-components";
import { dark } from "../../theme";
const { Sider } = Layout;

export const CustomSider = styled(Sider)`
  background: ${(props) => dark["main-background"]};
`;

export const CustomMenu = styled(Menu)`
  background: ${(props) => dark["main-background"]} !important;
`;
