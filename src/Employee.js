import React from 'react'

class Employee extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
         
                <div>
               
                        {this.props.employee.isActive==true ?     
                <p style={{ color:'Green', marginLeft: '10px'}}>{this.props.employee.name} {this.props.employee.age}</p> :      
                <p style={{ color:'Red', marginLeft: '10px'}}>{this.props.employee.name} {this.props.employee.age}</p>}
            
                </div>
                   
            )
    }
}

export default Employee