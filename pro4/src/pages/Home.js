import React, { Component } from 'react'
import Citylist from "./Citylist"
class Home extends Component {

    constructor(props){
        super(props)

        this.state={
            url:"",
            city:"",
            temp:""
        }

    }
    handlChange=(e)=>{
        this.setState({
            city:e.target.value
        })
    }

    handlClok=(e)=>{
        e.preventDefault();
        this.props.newObj(this.state.city)
    }
    render() { 

        const allArr = this.props.list.map((item,key)=>{
            return <Citylist city={item} key={key}/>
        })
        return ( 
            <div>
            <form>
                <label>
                    Search city:
                </label>
                <input type="text"
                onChange={this.handlChange}
                 ></input>
                 <button onClick={this.handlClok}> add</button>  
                 <button onClick={this.handlChange}>Delete</button>
            </form>

            <ul>
                {allArr}
            </ul>
            
            </div>
         );
    }
}
 
export default Home;