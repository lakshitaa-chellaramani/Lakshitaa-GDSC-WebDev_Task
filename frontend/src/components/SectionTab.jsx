import React from "react";
import HeroProducts from "./Tabs/HeroProducts";
import Men from "./Tabs/Men";
import Women from "./Tabs/Women";
import Kids from "./Tabs/Kids";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Secttt = () => {
  return (
    <div>Hello world</div>
  )
}
 

 function SectionTab() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "All Collection",
      value: "html",
      desc: <HeroProducts/>
    },
    {
      label: "Mens Collection",
      value: "react",
      desc: <Men/>,
    },
    {
      label: "Womens Collection",
      value: "vue",
      desc: <Women/>,
    },
    {
      label: "Kids Collection",
      value: "angular",
      desc: <Kids/>,
    },
    
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-4 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map((value, i) => (
          <TabPanel key={i} value={value.value}>
            {value.desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default SectionTab;