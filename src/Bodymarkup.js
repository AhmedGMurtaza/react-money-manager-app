import React from 'react';

const BodyMarkup = ({fields,deleteMe}) =>{
    return (
      fields.map((item,index)=>(
        <tr key={index}>
          <td>{item.name}</td>
          <td>${item.amount}</td>
          <td>
            <button className="btn btn-remove" onClick={()=>deleteMe(index)}>
              <i className="fa fa-times"></i>
            </button>
          </td>
        </tr>
      ))
    );
  };
  export default BodyMarkup;