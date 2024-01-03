import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type StackFullDetailProps = {
  title?: string;
  options?: ReactNode;
  fullContent?: ReactNode;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
};

const StackFullDetail: FC<StackFullDetailProps> = ({
  title,
  options,
  fullContent,
  headerContent,
  footerContent,
}) => {
  return (
    <Flex flexGrow={1} flexShrink={1} flexBasis="0px" flexDirection={"column"}>
      <Box padding={4}>
        <Flex alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize="2xl">
            {title}
          </Text>
          {options && <Box marginLeft={"auto"}>{options}</Box>}
        </Flex>
      </Box>
      {headerContent && <Box>{headerContent}</Box>}
      {fullContent && (
        <Flex flex={1} overflowY={"scroll"}>
          {fullContent}
        </Flex>
      )}
      {footerContent && <Box>{footerContent}</Box>}
    </Flex>
  );
};

export default StackFullDetail;
