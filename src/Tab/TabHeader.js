import { useContext } from "react";
import { TabContext } from "./TabContext";
import { TabHeaderItem } from "./styles";

const TabHeader = ({ title, children }) => {
  const context = useContext(TabContext);
  const isActive = title === context?.activeTab;
  const handleActive = () => context?.setTab(title);

  return (
    <TabHeaderItem isActive={isActive} onClick={handleActive}>
      {children}
    </TabHeaderItem>
  );
};

export default TabHeader;