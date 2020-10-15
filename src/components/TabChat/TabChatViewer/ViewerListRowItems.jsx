// @flow
import React from "react";
import Scrollbars from "react-custom-scrollbars";

type ListProp = {
  data: Array<any> | [],
  render: (currentData: any, index: number) => any
};

const ViewerListRowItems = ({ data, render } : ListProp ) => {
  return (
    <Scrollbars height="100%" autoHide>
      {data.map((currentData, index) => render(currentData, index))}
    </Scrollbars>
  );
};

export default ViewerListRowItems;
