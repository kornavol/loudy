import React, { FC } from "react";

import "./style.css"

import Content from "./Content/Content";
import Playbar from "./Playbar/Playbar";


const MusicPayer: FC = () => {
  return (
    <div id="musicPlayer">
      <Content />
      <Playbar />
    </div>
  );
};

export default MusicPayer;
