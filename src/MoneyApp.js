import React, { Component } from 'react';
import TableView from './Tableview';

class MoneyApp extends Component {
  state = {
    formValues:[],
    errorText:''
  }

  componentDidMount(){
    this.updateData();
  }

  validate = (values) => {
    if(values.name.length < 3){
      this.setState((prev,prop)=>{
        return {errorText:'Name must be atleast 3 letters'}
      });
      return null;
    }
    else if(values.amount <= 0 ){
      this.setState((prev,prop)=>{
        return {errorText:'Amount must be greater then 0'}
      });
      return null;
    }
    return true;
  }

  updateData = () => {
    if(localStorage.getItem('formValues')){
      let formValues = localStorage.getItem('formValues');
      formValues = JSON.parse(formValues);
      this.setState((prev,prop)=>{
        return { formValues }
      });
    }
  }

  deleteItem = (index) => {
    const formValues = this.state.formValues;
    formValues.splice(index,1);
    this.saveData(formValues);
  }

  getData = () => {
    if(localStorage.getItem('formValues')){
      const fData = localStorage.getItem('formValues');
      return JSON.parse(fData);
    }
    else{
      return null;
    }
  }

  saveData = (data) => {
    let fData = [];
    fData.push(...data);
    const formJson = JSON.stringify(fData);
    localStorage.setItem('formValues',formJson);
    this.updateData();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      name: this.name.value,
      amount: this.amount.value
    };
    if(this.validate(formValues)){
      this.setState((prev,prop)=>{
        return {errorText:''}
      });
      const newData = [...this.state.formValues,formValues];
      this.saveData(newData);
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="section">
          <div className="section-heading"><h2>Expenses</h2></div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input type="text" ref={input=>this.name=input}/>
            </label>
            <label>
              Amount
              <input type="number" ref={input=>this.amount=input} />
            </label>
            <button type="submit" className="btn"><i className="fa fa-plus"></i>&nbsp;Add</button>
            { this.state.errorText.length > 0 &&
              <p className="error-text">{this.state.errorText}</p>
            }
          </form>
        </div>
        <TableView data={this.state.formValues} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default MoneyApp;
