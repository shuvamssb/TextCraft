import React, {useState} from 'react'
//state ----we are using HOOKS



export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("upper casee was clciked"+text);
        let newText= text.toUpperCase();
        setText(newText);
       // setText("You have clicked on handleUpClick");
       props.showAlert("Converted to uppercase","success");
        
    }
    const handleLowClick = ()=>{
      //console.log("upper casee was clciked"+text);
      let newText= text.toLowerCase();
      setText(newText);
     // setText("You have clicked on handleUpClick");
     props.showAlert("Converted to lowercase","success");
      
  }
  const handleClearCLick = ()=>{
    //console.log("upper casee was clciked"+text);
    let newText="";
    setText(newText);
   // setText("You have clicked on handleUpClick");
   props.showAlert("Text cleared","success");
    
}


const handleCopy =()=> {
var text= document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value); //copy all and keep it in clipboard.
props.showAlert("Copied to Clipboard!","success");
}

const handleExtraSpaces =()=> {
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces Removed","success");
  }


    const handleOnChange = (event)=>{
        //console.log("On Chnage")
        setText(event.target.value); // used to input more text since textarea text is alreay defined and text cannot be inserted more unless we do this. This is known as Handling Event.
    }

    const [text, setText] = useState('');//text is varibale and value will be Enter Tect here and setText is a function to update text
   // text ="newtext";//Wrong way to change the state
    //setText("new text");// Correct way to change the text

  return (
    <> {/*JSX Fragment*/}
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        
        <h1>{props.heading}</h1>        
        <div className="mb-3">
        {/*<label for="myBox" className="form-label">Example textarea</label>*/}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
        {/*onChange function is triggered whenever text is aasigned..onChange here is used for input for user and also on style two barces are there one for javaSCript and other for writing object in javascript*/}
        </div>
        <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
        {/*handleUpClick is a function.....mx-2 bootstarp to give margin in x */}
        <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleLowClick}>Convert to Lowercase</button>        
        <button className={`btn btn-${props.btnColor} mx-2`}onClick={handleClearCLick}>Clear Text</button>
        <button className={`btn btn-${props.btnColor} mx-2`}onClick={handleCopy}>Copy All</button>
        <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     
    {/*}  //Video   8*/}
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}> {/*my-3 is bootstarp */}
        <h1>Your text summary</h1>
        <p>{text.length>1?text.trim().split(/\s+/).length : 0 } words and {text.length} characters</p>
        <p>{0.008 *  text.split(" ").length}  minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somehing in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}



