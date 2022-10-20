import {
  Avatar,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import StackFullDetail from "../../components/StackFullDetail";
import withProfileId from "../../utils/hoc/withProfileId";

const Requests = () => {
  return (
    <StackFullDetail
      title="Requests"
      options={
        <Avatar
          size="sm"
          icon={<FiEdit size={20} />}
          bg="gray.100"
          color="black"
        />
      }
      headerContent={
        <Box>
          <Tabs>
            <TabList>
              <Tab>You May Know</Tab>
              <Tab>Spam</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      }
      fullContent={null}
    />
  );
};

export default withProfileId(Requests);
