import React from "react";
import Scrollbars from "react-custom-scrollbars";
import RowItem from "./RowItem";

const ViewListItems = ({data}) => {
  return (
    <Scrollbars height="100%" autoHide>
      {data.map((currentData, i) => ( <RowItem key={i} {...currentData} /> ))}
    </Scrollbars>
  );
};

export default ViewListItems;
