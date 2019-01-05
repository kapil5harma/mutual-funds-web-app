import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const TabComponent = () => {
  // console.log('props: ', props);
  return (
    <Tabs>
      <TabList>
        <Tab>Equity</Tab>
        <Tab>Debt</Tab>
        <Tab>Hybrid</Tab>
      </TabList>

      <TabPanel>
        <Card tab='1' />
      </TabPanel>
      <TabPanel>
        <Card tab='2' />
      </TabPanel>
      <TabPanel>
        <Card tab='3' />
      </TabPanel>
    </Tabs>
  );
};

export default TabComponent;
