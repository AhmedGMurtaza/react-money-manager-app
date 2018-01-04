import React from 'react';
import BodyMarkup from './Bodymarkup';

const TableView = ({data,deleteItem}) => {
    return (
      <div className="section">
        <div className="section-heading"><h2>Current Expenses</h2></div>
        <table className="table">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Amount
              </th>
              <th>
                Remove
              </th>
            </tr>
          </thead>
          <tbody> 
          <BodyMarkup fields= {data} deleteMe={deleteItem} /> 
          </tbody>
        </table>
      </div>
    );
  }
  
  export default TableView;