import clsx from "clsx";
import Downshift, { GetInputPropsOptions } from "downshift";

type classNames = {
  content?: string;
  item?: string;
  itemActive ?: string;
  container?: string;
};

type InputEngineOptionsProps<T> = {
  renderItem: (currentValue: T) => React.ReactNode;
  renderInput: (currentValue: GetInputPropsOptions) => React.ReactNode;
  onItemSelected?: (currentValue: T) => void;
  onInputValueChange?: (currentValue: string) => void;
  classNames: classNames;
  data: T[];
};

function InputEngineOptions<T>(props: InputEngineOptionsProps<T>) {
  const { content, item, container, itemActive } = props.classNames;
  return (
    <Downshift
      onInputValueChange={(value) => {
        props.onInputValueChange && props.onInputValueChange(value);
      }}
      onChange={(selection) => {
        props.onItemSelected && props.onItemSelected(selection);
      }}
    >
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        highlightedIndex,
        isOpen,
      }) => {
        return (
          <div className={container}>
            {props.renderInput(getInputProps())}
            <div {...getMenuProps()}>
              {isOpen && (
                <div className={content}>
                  {props.data.map((dataItem, index) => (
                    <div
                      {...getItemProps({
                        key: index,
                        item,
                      })}
                      className={clsx(
                        itemActive,
                        highlightedIndex === index ? itemActive : "",
                      )}
                    >
                      {props.renderItem(dataItem)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      }}
    </Downshift>
  );
}

export default InputEngineOptions;
