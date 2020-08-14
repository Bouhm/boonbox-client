import React, { ReactNode } from 'react';

import { SidebarActionTypes } from '../../store/sidebar/actions';

export interface ITab {
  label: string;
  content: ReactNode;
}

type TabContainerProps = {
  tabs: ITab[];
  activeTab: number;
  onChange(tabIndex: number): SidebarActionTypes;
};

const TabContainer = ({ tabs, activeTab, onChange }: TabContainerProps) => {
  const handleClickTab = (e: React.MouseEvent) => {
    onChange(parseInt(e.currentTarget.getAttribute('data-index')!));
  };

  const renderTabLabel = (tab: ITab, index: number) => {
    const isActive = index === activeTab;

    return (
      <div
        key={`tab-${index}`}
        data-index={index}
        className={`Tab ${isActive ? 'asActive' : ''}`}
        onClick={handleClickTab}
      >
        {tab.label}
      </div>
    );
  };

  return (
    <div className="Tab-Container">
      <div className="Tab-Labels">{tabs.map(renderTabLabel)}</div>
      <div className="Tab-Content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabContainer;
