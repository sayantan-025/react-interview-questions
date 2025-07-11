import { useState } from "react";
import { tabsData } from "./data";
import "./TabsComponent.css";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <h1>Tabs</h1>
      <div className="tabs-container">
        {tabsData.map((data, i) => (
          <button
            key={i}
            className={i === activeTab ? "active" : ""}
            onClick={() => setActiveTab(i)}
          >
            {data.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">{tabsData[activeTab].content}</div>
    </>
  );
};

export default TabsComponent;
