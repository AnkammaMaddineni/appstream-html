import React from 'react'

class Car extends React.Component{
    constructor(){
        super();
            this.state={
                cars:["Tesla",
                    "BMW",
                    "Lexus",
                    "Honda",
                    "Hyudai",
                    "Mercedes",
                    "Toyota"
                     ]
                   
            }


         }
        
        
    
        

render()
{    
    return (
        <ul>
        
          {this.state.cars.map((car,index) =>{
            return (
                <>
                <li>{car}</li>
                </>
            )
          })}

        </ul>
          )
      
  
        
    

    
}

}






export default Car;