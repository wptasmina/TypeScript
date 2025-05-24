//Style Props
import ButtonStyle from './ButtonStyle'

const btn ={
    color: "white", 
    background: "purple", 
    fontSize: "20px", 
    padding: "20px"
}

function TypingStyle() {
  return (
    <div>
        <h3>Style Props</h3>
        <ButtonStyle btnStyle={btn} />
    </div>
  )
}

export default TypingStyle