import React from 'react'
import { render } from 'react-dom'
import Employee from './Employee';
import AddForm from './AddForm';

class Employees extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        employees: [],
        isloading:true
      }
      this.fetchData=this.fetchData.bind(this);

    }
  
    fetchData()
    {
      this.setState({isloading: true});
    fetch("http://localhost:3001/employees")
    .then(resp => resp.json())
        .then(resp => {
          this.setState({
            employees: resp,
            isloading: false,
            isSaving: false,
            idDeleting: false
          })
        })
    }
    componentDidMount(){
      
    this.fetchData();
}
 

    render() {
      return(
<div>

        {this.state.isloading ? <p>Loading...</p> : 
         
         <div>
            {this.state.employees.map(employee =>
                        <Employee key={employee.id} employee={employee} delete={this.deleteEmp}/>)}
      
        </div>}
                        </div>

      )
      
            }
}
  export default Employees;