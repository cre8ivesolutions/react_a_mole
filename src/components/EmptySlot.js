//A useEffect hook that will start the timer and clean it up afterward

import { useEffect } from "react"
import MoleHill from '../molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 12000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} alt="molehill" src={MoleHill} />
        </div>
    )
}

export default EmptySlot