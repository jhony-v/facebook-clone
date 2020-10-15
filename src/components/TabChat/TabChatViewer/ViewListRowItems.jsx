// @flow
import React from "react";
import Scrollbars from "react-custom-scrollbars";

type ViewListProp = {
  data: Array<any> | [],
  render: (currentData: any, index: number) => any
};

const ViewListRowItems = ({ data, render } : ViewListProp ) => {
  return (
    <Scrollbars height="100%" autoHide>
      {data.map((currentData, index) => render(currentData, index))}
    </Scrollbars>
  );
};

export default ViewListRowItems;
