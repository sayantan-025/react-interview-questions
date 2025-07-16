import { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tabs-container">
        <h1 className="tabs-heading">Tabs</h1>
        <div className="tab-list">
          {" "}
          {tabsData.map((tab, index) => (
            <button key={index} onClick={() => handleClick(index)}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">{tabsData[activeTab].content}</div>
      </div>
    </>
  );
};

export default Tabs;
