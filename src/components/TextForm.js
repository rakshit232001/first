import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUPClick = ()=>{
        console.log("Uppercase was clicked");
        //let newText = text.toUpperCase();
        setText(text.toUpperCase());
    }

    const handleLCClick = ()=>{
        console.log("Uppercase was clicked");
        //let newText = text.toUpperCase();
        setText(text.toLowerCase());
    }

    const handleOncChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text,setText] = useState('Enter your text here');
    return (
    <>
    <div className="Container">
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOncChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLCClick}>Convert to Uppercase</button>
    </div>
    <div className="Container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutest to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
