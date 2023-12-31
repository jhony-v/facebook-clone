import clsx from "clsx";
import Downshift, { GetInputPropsOptions } from "downshift";
import PressableOverlay from "../ui/PressableOverlay";

type classNames = {
  content?: string;
  item?: string;
  itemActive ?: string;
  container?: string;
};

type InputEngineOptionsProps<T> = {
  renderItem: (currentValue: T) => React.ReactNode;
  renderInput: (currentValue: () => GetInputPropsOptions) => React.ReactNode;
  onItemSelected?: (currentValue: T) => void;
  onInputValueChange?: (currentValue: string) => void;
  classNames?: classNames;
  data: T[];
  itemToString ?: (item : any) => string
};

function InputEngineOptions<T>(props: InputEngineOptionsProps<T>) {
  const { classNames } = props;
  return (
    <Downshift
      onInputValueChange={(value) => {
        props.onInputValueChange && props.onInputValueChange(value);
      }}
      onChange={(selection) => {
        props.onItemSelected && props.onItemSelected(selection);
      }}
      itemToString={props.itemToString}
    >
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        highlightedIndex,
        isOpen,
      }) => {
        return (
          <div className={classNames?.container}>
            {props.renderInput(getInputProps)}
            <div {...getMenuProps()}>
              {isOpen && (
                <div className={classNames?.content}>
                  {(props.data || []).map((dataItem, index) => (
                    <PressableOverlay
                      {...getItemProps({
                        key: index,
                        item : dataItem,
                      })}
                      key={index}
                      className={clsx(
                        classNames?.itemActive,
                      )}
                      hoverable
                      hovered={highlightedIndex === index}
                    >
                      {props.renderItem(dataItem)}
                    </PressableOverlay>
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

InputEngineOptions.defaultProps = {
  classNames : {
    container : "",
    item : "",
    itemActive : "",
    content : "",
  }
}

export default InputEngineOptions;
