import React from 'react';

import { SidebarActionTypes } from '../../store/sidebar/actions';

type TabContainerProps = {
  tabs: string[];
  activeTab: number;
  onChange(tabIndex: number): SidebarActionTypes;
};

const TabContainer = ({ tabs, activeTab, onChange }: TabContainerProps) => {
  const handleClickTab = (e: React.MouseEvent) => {
    onChange(parseInt(e.currentTarget.getAttribute('data-index')!));
  };

  const renderTab = (content: string, index: number) => {
    const isActive = index === activeTab;

    return (
      <div
        key={`tab-${index}`}
        data-index={index}
        className={`Tab ${isActive ? 'asActive' : ''}`}
        onClick={handleClickTab}
      >
        {content}
      </div>
    );
  };

  return <div className="Tab-Container">{tabs.map(renderTab)}</div>;
};

export default TabContainer;
