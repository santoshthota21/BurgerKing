import React from 'react'
import './BurgerIngredients.css'
class BurgerIngredients extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

      
        
        let ingredient = null;
        
        switch (this.props.Ingredient) {
            case 'BreadTop':                
                ingredient= (
                
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                    
                </div>
                );
               
                return ingredient;
                break;
            
            case 'BreadBottom':                
                ingredient= <div className="BreadBottom"></div>;
               
                return ingredient;
                break;

            
            case 'Meat':                
                ingredient= <div className="Meat"></div>;
                return ingredient;
                break;
            
            case 'Cheese':                
                ingredient= <div className="Cheese"></div>;
                return ingredient;
                break;

            case 'Salad':                
                ingredient= <div className="Salad"></div>;
                return ingredient;
                break;
            
            case 'Bacon':                
                ingredient= <div className="Bacon"></div>;
                return ingredient;
                break;
        
            default:
                ingredient= null;
                return ingredient;
                break;
            
        }

    }

}

export default BurgerIngredients;