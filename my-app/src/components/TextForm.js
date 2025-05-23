import React, { useState } from 'react'



export default function TextForm(props) {

    const handleSentenceCase = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
    }

    const handleUpClick = () =>{
        // console.log("Upper Case Clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick= () =>{
         let newText =text.toLowerCase();
         setText(newText)
    }

    const handleCapitalizedCase = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
    }

    const handleTitleCase = () => {
        const smallWords = ['a', 'an', 'and', 'the', 'in', 'on', 'at', 'for', 'to', 'with', 'but', 'or'];
        let newText = text
            .toLowerCase()
            .split(' ')
            .map((word, index) => {
                if (index === 0 || !smallWords.includes(word)) {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }
                return word;
            })
            .join(' ');
        setText(newText);
    }

    const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "textfile.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element);
}


    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleOnFocus = () => {
        if (text === 'Enter Text Here') {
            setText('');
        }
    }

    const [text, setText] = useState('Enter Text Here');
    return (
        <>
        <div className='container'>
            <h1 className='text-center text-black fw-bold mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} onFocus={handleOnFocus} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleSentenceCase}>Sentence Case</button>
            <button className='btn btn-primary mx-4' onClick={handleUpClick}>Upper Case</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Lower Case</button>
            <button className='btn btn-primary mx-2' onClick={handleCapitalizedCase}>Capitalized Case</button>
            <button className='btn btn-primary mx-2' onClick={handleTitleCase}>Title Case</button>
            <button className='btn btn-success mx-2' onClick={handleDownload}>Download Text</button>


        </div>
        <div className='container'>
            <h1>Your Text Summary</h1>
            <h5>{text.split(" ").length} words, {text.length} characters </h5>
            <h5>{0.008 * text.split(" ").length} minutes to read </h5>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
} 