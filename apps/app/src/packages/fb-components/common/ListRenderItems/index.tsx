import React, { useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import { AutoSizer, List } from "react-virtualized";

const listStyle = {
  overflowX: false,
  overflowY: false,
  outline: "none"
};

const ListRenderItems = ({ data, render, renderHeight  = 80 }) => {
  const scroll = useRef<any>(null);

  const onScrolling = ({ target }) => {
    const { scrollTop, scrollLeft } = target;
    scroll.current.Grid.handleScrollEvent({ scrollTop, scrollLeft });
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Scrollbars autoHide style={{ width, height }} onScroll={onScrolling}>
          <List
            ref={scroll}
            width={width}
            height={height}
            style={listStyle as any}
            rowHeight={renderHeight}
            rowCount={data.length}
            rowRenderer={(options) => render(data[options.index], options)}
          />
        </Scrollbars>
      )}
    </AutoSizer>
  );
};


export default ListRenderItems;
