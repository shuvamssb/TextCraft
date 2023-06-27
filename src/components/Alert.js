import React from 'react'

export default function Alert(props) {
const captialize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
    //Here we are making the first alphabet capital and then slicing the rest of them leaving the 0th poistion.
}

  return (   
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captialize(props.alert.type)}</strong>: {props.alert.msg}
           { /*<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/}
        </div>
    //The above code is like if props .alert is not null thenit wil execute the div or else  it will wont execute the div
  )
}
