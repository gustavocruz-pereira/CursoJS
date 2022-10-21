import './style.css'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const Redirect = () => {
    const [time, setTime] = useState(3)
    const timeOut = useRef(0)
    const navigate = useNavigate()

    useEffect(() => {
        clearTimeout(timeOut.current)
        timeOut.current = setTimeout(() => {
            setTime(t => t - 1)
        }, 1000)

        if (time <= 0) {
            navigate('/about', {
                state: `This is state: ${Math.random()}`
            })
        }

        return () => {
            clearTimeout(timeOut.current)
        }
    }, [time])

    return (
        <div>
            <h1>Sai daqui maluco!!! {time}</h1>
        </div>
    )
}