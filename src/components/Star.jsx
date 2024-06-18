
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Star.css'

export default function Star({numberOfStars}) {

    const [rating , setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleMouseClick(index){
        setRating(index)

    }

    function handleMouseMove(index){
        setHover(index)

    }

    function handleMouseLeave(){
        setHover(rating)

    }


    return (
        <body className='star'>

            {[...Array(numberOfStars)].map(( _,index) => {
index = index + 1;
                return < FaStar

                    key={index}
                    className={index<=(rating || hover)  ? "active" : "inactive"}
                    onClick={()=>handleMouseClick(index)}
                    onMouseMove={()=>handleMouseMove(index)}
                    onMouseLeave={()=>handleMouseLeave()}



                />

            })

            }

        </body>
    )
}