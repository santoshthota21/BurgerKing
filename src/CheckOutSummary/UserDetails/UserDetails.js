import React from 'react'
import './UserDetails.css'
import InputFiled from '../../UI/InputField/InputField'

class UserDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={
            formAttributes:{
                name:{
                    id:"name",
                    elementType:"text",
                    placeholder:"Name",
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                    
                },
                email:{
                    id:"email",
                    elementType:"email",
                    placeholder:"Email",
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                phoneNumber:{
                    id:"phoneNumber",
                    elementType:"number",
                    placeholder:"Phone Number",
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                address:{
                    id:"address",
                    elementType:"text",
                    placeholder:"Address",
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                country:{
                    id:"country",
                    elementType:"text",
                    placeholder:"Country",
                    value:"",
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                }

            },
            submitted:false
            
        }
    }

    attributeValidation(value,rule){

        let isValid=false;
        if(rule.required){
            isValid=value.trim()!=='';
        }
        return isValid;
    }

    inputChangeHandler=(event,attribute)=>{

        const updatedFormAttribute={
            ...this.state.formAttributes
        }

        const updatedFormEle={
            ...updatedFormAttribute[attribute]
        }
        updatedFormEle.value=event.target.value;
        updatedFormEle.touched=true;
        updatedFormEle.valid=this.attributeValidation(updatedFormEle.value,updatedFormEle.validation);
        updatedFormAttribute[attribute]=updatedFormEle;
        //console.log(updatedFormAttribute)
        this.setState({formAttributes:updatedFormAttribute});

    }

    

    submitHandler=(event)=>{
        event.preventDefault();

        const finalFormAttribute={
            ...this.state.formAttributes
        }
        let isValid=true;

        let fVal = Object.keys(finalFormAttribute).map(val=>{

            //console.log(finalFormAttribute[val].value);
            isValid=isValid&&this.attributeValidation(finalFormAttribute[val].value,finalFormAttribute[val].validation);
            return finalFormAttribute[val].value;
        });

        if(isValid){
            this.setState({submitted:true})
        }
        
        //console.log(fVal);
        //console.log(isValid);
        //alert(fVal);
    }

    render(){
        
        const formFieldArray=[];
        for (let attribute in this.state.formAttributes){
            formFieldArray.push({
                id:attribute,
                config:this.state.formAttributes[attribute]
            })
        }

        //console.log(formFieldArray);

        const formAttr =formFieldArray.map(attribute=>{
            let attr=attribute.config;
            //console.log(attr)
            return <InputFiled 
                key={attr.id}
                id={attr.id}
                elementType={attr.elementType}
                touched={attr.touched}
                valid={attr.valid}
                changed={(event)=>{this.inputChangeHandler(event,attr.id)}} 
                placeholder={attr.placeholder}  
                value={attr.value}></InputFiled>

        })
        //console.log(formAttr);
        


        let thankyou=(<h1>Thank You</h1>)
        return(
            <div className="UserDetails">
               
                                                                          
               {this.state.submitted && thankyou}
               {!this.state.submitted &&(
                <form >
                    <h1 className="FormHeading">User Details</h1>
                    {formAttr}  
                    <button className="FormBtn" onClick={(event)=>{this.submitHandler(event)}}>Submit</button>
                </form>
               )}
    
            </div>
            
        );
    }

}

export default UserDetails;