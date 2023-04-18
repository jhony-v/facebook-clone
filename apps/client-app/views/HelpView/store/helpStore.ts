import { createContextStore } from "easy-peasy";
import { navigationOptions, topicOptions } from "./initialState";

const helpStore = createContextStore({
  navigationOptions,
  topicOptions
});

export default helpStore;
