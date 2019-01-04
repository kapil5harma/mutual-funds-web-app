import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const TabComponent = props => {
  return (
    <Tabs>
      <TabList>
        <Tab>Equity</Tab>
        <Tab>Debt</Tab>
        <Tab>Hybrid</Tab>
      </TabList>

      <TabPanel>
        <Card funds={[...props.categories.equityFunds]} />
      </TabPanel>
      <TabPanel>
        <Card funds={[...props.categories.debtFunds]} />
      </TabPanel>
      <TabPanel>
        <Card funds={[...props.categories.hybridFunds]} />
      </TabPanel>
    </Tabs>
  );
};

export default TabComponent;
