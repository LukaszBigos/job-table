import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
  render() {

    const peopleListTable = this.props.peopleListTable;

    return (
      <table>
        <TableHeader />
        <TableBody peopleList = {peopleListTable}/>
      </table>
    )
  }
}

export default Table;