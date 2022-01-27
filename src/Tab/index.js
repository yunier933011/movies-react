import { ListTabs } from "../data";
import {
  GlobalContainer,
  TabHeaderContainer,
  TabPanelContainer,
  TabPanelItem
} from "./styles";
import TabContainer from "./TabContext";
import TabHeader from "./TabHeader";
import TabPanel from "./TabPanel";

import Example from "./Example";

const Tab = () => {
  return (
    <div className="container">
      <h1 className="center">
        Tabs con React Context API, React Hooks y Styled Components
      </h1>
      <p className="center">By: Yadu López</p>
      <GlobalContainer>
        <TabContainer tab={ListTabs[0].title}>
          <TabHeaderContainer>
            {ListTabs?.map(({ id, title }) => (
              <TabHeader title={title} key={id}>
                {title}
              </TabHeader>
            ))}
          </TabHeaderContainer>
          <TabPanelContainer>
            {ListTabs?.map(({ id, title, description }) => (
              <TabPanel whenActive={title} key={id}>
                <TabPanelItem>{description}</TabPanelItem>
              </TabPanel>
            ))}
          </TabPanelContainer>
        </TabContainer>
      </GlobalContainer>
      <Example/>
    </div>
  );
};

export default Tab;