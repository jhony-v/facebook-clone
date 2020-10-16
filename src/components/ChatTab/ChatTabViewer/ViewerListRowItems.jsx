import React from "react";
import Scrollbars from "react-custom-scrollbars";

const ViewerListRowItems = ({ data, render } ) => {
  return (
    <Scrollbars height="100%" autoHide>
      {data.map((currentData, index) => render(currentData, index))}
    </Scrollbars>
  );
};

export default ViewerListRowItems;
