import React from "react";
import { useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import { AutoSizer, List } from "react-virtualized";

const listStyle = {
  overflowX : false,
  overflowY : false,
}

const ListRenderItems = ({ data, render, renderHeight }) => {
  const scroll = useRef(null);

  const onScrolling = ({ target }) => {
    const { scrollTop, scrollLeft } = target;
    scroll.current.Grid.handleScrollEvent({ scrollTop, scrollLeft });
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Scrollbars style={{ width, height }} autoHide onScroll={onScrolling}>
          <List
            ref={scroll}
            width={width}
            height={height}
            style={listStyle}
            rowHeight={renderHeight}
            rowCount={data.length}
            rowRenderer={(options) => render(data[options.index], options)}
          />
        </Scrollbars>
      )}
    </AutoSizer>
  );
};

ListRenderItems.defaultProps = {
  renderHeight : 80
}

export default ListRenderItems;
