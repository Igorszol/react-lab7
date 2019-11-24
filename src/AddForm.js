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
          email: "",
          phoneIsValid:false,
          emailIsValid:false,
          }
        this.ageChanged = this.ageChanged.bind(this);
        this.parentnameChanged = this.parentnameChanged.bind(this);

        this.parentphoneChanged = this.parentphoneChanged.bind(this);

        this.nameChanged = this.nameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
       
        this.emailValidation=this.emailValidation.bind(this);
        this.numberValidation=this.numberValidation.bind(this);

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

    numberValidation(event){
      const phoneNumberPattern = /^[0-9]{9}$/;
      this.setState({ phoneIsValid:phoneNumberPattern.test(event.target.value)})
 
    }
    emailValidation(event){
      const emailPattern =/[a-zA-Z0-9-]{3,}@[a-zA-Z0-9-]{3,}[.]{1}[a-zA-Z]{2,}/;
      this.setState({ emailIsValid:emailPattern.test(event.target.value)});
   
    }
    
   

    render(){
        return(
          <div style= {{border:"2px solid black", position:"absolute, centre", margin:"10%"}}>
          <div style={{margin:"5px"}}>
          <label style={{ marginLeft:"10%"}}>Age: </label>
          <input style={{position:"realtive", marginLeft:"35%"}} type="number" min="1" max="150" value={this.state.age} onChange={this.ageChanged}></input>
          </div>
          {this.state.age<18 ? 
          <div>
          <div style={{margin:"5px"}}>
          <label style={{ marginLeft:"10%"}}>Parent Name: </label>
          <input style={{position:"realtive", marginLeft:"35%"}} type="text" value={this.state.parentname} onChange={this.parentnameChanged}></input>
          </div>
          <div style={{margin:"5px"}}>
          <label style={{ marginLeft:"10%"}}>Parent Phone: </label>
          <input style={{position:"realtive", marginLeft:"35%"}} type="text" value={this.state.parentphone} onChange={(event)=>{this.parentphoneChanged(event);this.numberValidation(event);}}></input>
          {this.state.phoneIsValid ? null : <label style={{color:"red", marginLeft:"5px"}}>Incorrect number</label>}
          </div>
          </div>
          :
          <div>
          <div style={{margin:"5px"}}>
          <label style={{ marginLeft:"10%"}}>Name: </label>
          <input style={{position:"realtive", marginLeft:"35%"}} type="text" value={this.state.name} onChange={this.nameChanged}></input>
          </div>
          <div style={{margin:"5px"}}>
          <label style={{ marginLeft:"10%"}}>Email: </label>
          <input style={{position:"realtive", marginLeft:"35%"}} type="text" value={this.state.email} onChange={(event)=>{this.emailChanged(event);this.emailValidation(event);}}></input>
          {this.state.emailIsValid ? null : <label style={{color:"red", marginLeft:"5px"}}>Incorrect email</label>}
          </div>
         </div>}
         <button style={{ position:"relative", left:"45%", margin:"10px"}} type="submit" disabled={this.state.age<18 ? !this.state.phoneIsValid : !this.state.emailIsValid}>Submit</button>
            </div>
        )}

}
export default AddForm; 