//A useEffect hook that will start the timer and clean it up afterward

import { useEffect } from 'react'
import moleImg from '../mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '20vw'}} 
            src={moleImg} 
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole