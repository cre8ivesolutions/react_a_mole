//A useEffect hook that will start the timer and clean it up afterward

import { useEffect } from 'react'
import moleImg from '../mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 500)
        let timer = setTimeout(() => {
            props.theMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} 
            src={moleImg} 
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole