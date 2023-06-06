import React from 'react';
import Tab from './Tab';
import TabGroup from './TabGroup';
import SearchBar from './SearchBar';
import DataTable from './DataTable';

class App extends React.Component {
  state = {
    showSortingOptions: false,
    tableData: [],
    selectedTab: 'In Progress'
  };

  handleSort = () => {
    this.setState(prevState => ({
      showSortingOptions: !prevState.showSortingOptions
    }));
  };

  handleTabChange = tabName => {
    // Update the tableData state based on the selected tab
    if (tabName === 'In Progress') {
      this.setState({
        tableData: [
          { column1: 'Value 1', column2: 'Value 2' },
          { column1: 'Value 3', column2: 'Value 4' }
        ]
      });
    } else if (tabName === 'To Be Assigned') {
      this.setState({
        tableData: [
          { column1: 'Value 5', column2: 'Value 6' },
          { column1: 'Value 7', column2: 'Value 8' }
        ]
      });
    }
    // Add more conditions for other tabs as needed
    this.setState({ selectedTab: tabName });
  };

  render() {
    const { showSortingOptions, tableData, selectedTab } = this.state;

    return (
      <div>
        <TabGroup onTabChange={this.handleTabChange} selectedTab={selectedTab}>
          <Tab label="In Progress">Content 1</Tab>
          <Tab label="To Be Assigned">Content 2</Tab>
          <Tab label="Action Needed">Content 3</Tab>
        </TabGroup>
        <SearchBar onSort={this.handleSort} />
        {showSortingOptions && (
          <div className="sorting-options">
            {/* Display sorting options here */}
          </div>
        )}
        <DataTable data={tableData} />
      </div>
    );
  }
}

export default App;
