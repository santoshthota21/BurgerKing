import React from 'react'
import BurgerIngrediants from '../BurgerIngredients/BurgerIngredients'
import './Burger.css'
class Burger extends React.Component{

    constructor(props){
        super(props);
        //console.log("this is from Burger cosntructor "+props.itemName);
        
    }  
   

    render(){

        let itemsPresent=false;
        const val=Object.keys(this.props.ingredient).map(Ikey =>{
            if(this.props.ingredient[Ikey]>0){
                return [...Array(this.props.ingredient[Ikey])].map(v =>{
                    console.log("dasf"+this.props.ingredient[Ikey]+Ikey)
                    itemsPresent=true;
                    return <BurgerIngrediants   Ingredient={Ikey}></BurgerIngrediants>
                    
                });
            }

        });

        //console.log("burger.js val:"+val+"\t"+itemsPresent)

        return(
            
            <div className='Burger'>
                <BurgerIngrediants Ingredient={"BreadTop"}></BurgerIngrediants>
                {val}
                {!itemsPresent && 
                
                    <div className="BurgerPlaceHolder">
                        <h6>Choose Your Taste</h6>
                    </div>    
                }
                <BurgerIngrediants Ingredient={"BreadBottom"}></BurgerIngrediants>
            </div>
        );
    }

}

export default Burger;