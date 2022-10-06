import './Button.css'
function Buttons({state,buttonClicked}) {
   
  return (
    <div><button className='custom-button' disabled={state ? true: false} onClick={buttonClicked}>Submit</button></div>
  )
}

export default Buttons