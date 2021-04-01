import React, { Component } from 'react'
import DogRunFront from './DogRunFront.jsx'
export default class DogRun extends Component{
    render(){
        return(
            <div className="dog-run-arizona">
                <p>Humans's Best Friend</p> 
                <p>Your dog needs exercize to be happy and healthy. These are built for large pets perfect for high energy dogs that require huge amounts of daily exercise. Some breeds need more exercise than others to prevent bad behavior (digging, chewing, excessive woofing, etc.) and maintaining healthy weight, it’s necessary to stay in great shape physically and mentally.</p>
                <p>A dog run will allow your pet the spaces to get this</p> 
                <div className="dog-run-phoenix"> 
                <DogRunFront />
                </div>
            </div>
        )
    }
}