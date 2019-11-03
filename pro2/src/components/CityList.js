import React from 'react';
import ListItem from './ListItem';


const CityList = props =>{

        const items = props.myCity.map(function(item, index){
            return <ListItem name={item} key={index}/>;
        })
    return(
        <ul>

            {items}
            
        </ul>
    )

};

export default CityList;