import React from 'react';

type TabContainerProps = { tabs: string[]; activeTab: number };

const TabContainer = ({ tabs, activeTab }: TabContainerProps) => {
  const renderTab = (content: string, index: number) => {
    const isActive = index === activeTab;

    return <div className={`Tab ${isActive ? 'asActive' : ''}`}>{content}</div>;
  };

  return <div className="Tab-Container">{tabs.map(renderTab)}</div>;
};

export default TabContainer;
