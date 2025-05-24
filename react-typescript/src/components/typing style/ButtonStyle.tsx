//Style Props

type ButtonStyleProps = {
    btnStyle: React.CSSProperties
}


const ButtonStyle =(props:ButtonStyleProps)=> {
  return (
    <div>
        <h1 style={props.btnStyle}>ButtonStyle</h1>
    </div>
  )
}

export default ButtonStyle