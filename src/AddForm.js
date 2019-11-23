import React from "react";

class AddForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
          age: "1",
          parentname:"",
          parentphone:"",
          name:"",
          email: ""
          }
        this.ageChanged = this.ageChanged.bind(this);
        this.parentnameChanged = this.parentnameChanged.bind(this);
        this.parentphoneChanged = this.parentphoneChanged.bind(this);

        this.nameChanged = this.nameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
       

        }

        
        ageChanged(event) {
          this.setState({ age:event.target.value });
        }
        
        parentnameChanged(event) {
          this.setState({ parentname: event.target.value });
        }
        parentphoneChanged(event) {
          this.setState({ parentphone: event.target.value });
        }
        nameChanged(event) {
              this.setState({ name:event.target.value });
            }

    emailChanged(event) {
        this.setState({ email: event.target.value });
    }



    render(){
        return(
          <div style= {{border:"2px solid black", position:"absolute, centre", margin:"10%"}}>
          <p><label style={{ position:"relative", left:"10%"}}>Age: </label><input style={{position:"absolute", left:"50%"}} type="number" value={this.state.age} onChange={this.ageChanged}></input></p>
          {this.state.age<18 ? 
          <div>
          <p><label style={{ position:"relative", left:"10%"}}>Parent Name: </label><input style={{position:"absolute", left:"50%"}} type="text" value={this.state.parentname} onChange={this.parentnameChanged}></input></p>
          <p><label style={{ position:"relative", left:"10%"}}>Parent Phone: </label><input style={{position:"absolute", left:"50%"}} type="number" value={this.state.parentphone} onChange={this.parentphoneChanged}></input></p>
          </div>
          :
          <div>
          <p><label style={{ position:"relative", left:"10%"}}>Name: </label><input style={{position:"absolute", left:"50%"}} type="text" value={this.state.name} onChange={this.nameChanged}></input></p>
          <p><label style={{ position:"relative", left:"10%"}}>Email: </label><input style={{position:"absolute", left:"50%"}} type="text" value={this.state.email} onChange={this.emailChanged}></input></p>
         </div>}
         <button style={{ position:"relative", left:"45%", margin:"20px"}}>Submit</button>
            </div>
        )}

}
export default AddForm; 