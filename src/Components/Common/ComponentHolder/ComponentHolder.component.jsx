import React from "react";
import { Row } from "antd";
import SideBar from "../../SideBar";

function ComponentHolder() {
  return (
    <div>
      <SideBar>
        <Row justify="center">This is component holder</Row>
      </SideBar>
    </div>
  );
}

export default ComponentHolder;
