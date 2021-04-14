import React from 'react'
import instace from '../axios/axios';
import { connect } from 'react-redux';
import Order from './Order/Order';
import './Orders.css';
import * as OrderActionCreator from '../reducer/OrderActionCreator';

class Orders extends React.Component{

    constructor(props){
        super(props);
        this.state={
            ingredients:{
                "Bacon": 0,
                "Cheese": 0,
                "Meat": 0,
                "Salad": 0
            },
            orders:[
                // customer={
                //     address: "",
                //     name: ""
                // },
                // ingredents={
                //     "Bacon": 0,
                //     "Cheese": 0,
                //     "Meat": 0,
                //     "Salad": 0
                // },
                // price=0
            ],
            data:[1,2,3]

        }
    }

    componentDidMount(){
        // var fetchedObject = localStorage.getItem('order');
        // console.log('fetchedObject for local storage: ', JSON.parse(fetchedObject));

        // let obj={... JSON.parse(fetchedObject)};
        // console.log('obj ', { ... obj});

        //let obj=[]
        // instace.get('/orders.json')
        // .then(response =>{
        //     console.log(response)
        //     if(response.status==200){
        //         console.log(response.data);

        //         Object.keys(response.data).map(key=>{
        //             obj.push({...response.data[key]})
        //         })
        //         console.log(obj);

        //         this.setState({orders:obj})
        //     }
        // })
        // .catch(error =>{console.log(error)})
        this.props.getOrder(this.props.token);
        console.log(this.props.ordersArray)
        //this.setState({ingredients:{... obj}})
      
    }

    render(){
        console.log(this.props.ordersArray)

        var data;
        data=this.props.ordersArray.map(key=>{
            var ing=key.ingredents;
            //console.log(key.ingredents);
            return(<Order ing={ing} customer={key.customer}></Order>)
        })
        
        //console.log('State Object ', this.state.ingredients);
        console.log('State data ', data);
        return(
            <div className="Orders">
                <h1>Your Last Order</h1>
                {data}
            </div>
        );
    }

}

const mapStateToProps= state =>{
    return{
        ordersArray : state.getOrder.orders,
        token:state.auth.idToken
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        getOrder : (token)=>dispatch(OrderActionCreator.getOrders(token))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders);