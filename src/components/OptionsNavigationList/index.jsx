import React from "react";
import Avatar from "../Common/Avatar";
import RowItemSelectable from "../Common/RowItemSelectable";
import items from "./items";

const OptionsNavigationList = () => {
  return (
    <div>
      {items.map((e, i) => (
        <RowItemSelectable key={i}
          image={<Avatar src={require("../../assets/icons/"+e.image)} />}
          text={e.title}
        />
      ))}
    </div>
  );
};

export default OptionsNavigationList;
