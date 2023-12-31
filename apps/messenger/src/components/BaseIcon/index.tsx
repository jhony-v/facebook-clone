import {
    Box,
  ColorProps,
  Icon,
  PlacementWithLogical,
  Tooltip,
} from "@chakra-ui/react";
import { FC, JSXElementConstructor } from "react";

type Size = number
type BaseIconProps = {
  icon: JSXElementConstructor<{ size?: Size }>;
  size?: Size;
  color?: ColorProps["color"];
  tooltip?: {
    label?: string;
    placement?: PlacementWithLogical;
  };
  onClick?(): void
};

const BaseIcon: FC<BaseIconProps> = ({
  icon,
  color = "blue.400",
  size = 20,
  tooltip = {},
  onClick
}) => {
  return (
    <Tooltip hasArrow placement={tooltip.placement} label={tooltip.label}>
        <Box display={"inline-block"} onClick={onClick}>
          <Icon as={icon} color={color} fontSize={size} />
        </Box>
    </Tooltip>
  );
};

export default BaseIcon;
