import React from "react";
import { Row } from "antd";
import SideBar from "../../SideBar";
import { MainComponent } from "./ComponentHolder.styled";

function ComponentHolder() {
  return (
    <div>
      <SideBar>
        <MainComponent>
          <Row justify="center">This is component holder</Row>
        </MainComponent>
      </SideBar>
    </div>
  );
}

export default ComponentHolder;
