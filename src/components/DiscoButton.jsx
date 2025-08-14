import { useState } from "react"

function DiscoButton() {

const [likes, setLikes] = useState(0)
const handleClick = () => {setLikes(likes+1)}
const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
let randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (

    <div>
        <button onClick={handleClick} style={{backgroundColor: randomColor, color:"white"}}>
        {likes} Likes
        </button>
    </div>
  )
}
export default DiscoButton