import React,{useState} from 'react'
export default function Box(props) {

      const handleUpClick=()=>
      {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converting to Upper Case", "success");

      }
      const handleLoClick=()=>
      {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Converting to Lower Case", "success");
      }
      const copyText=()=>
      {
         var text = document.getElementById("mybox");
         text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
      }
      const resetAll=()=>
      {
        let newtext ="";
        settext(newtext);
        props.showAlert("Reset successfully", "success");
      }
      const handleonchange=(e)=>
      {
        settext(e.target.value);
      }

    const [text, settext] = useState("");

    // dark mode
    // const [mybtn,setmybtn]=useState("Dark Mode")
    // const [mystyle, setmystyle]= useState(       
    // {
    //   color:"black",
    //   backgroundColor:"white"
    //     }
    // )
  
//     const themechange= ()=>
//     {
// if(mystyle.color=== "black")
// {
//   setmystyle({
//     color:"white",
//     backgroundColor:"black"
//   })

//   setmybtn("Light Mode")
// }
// else{
//   setmystyle({
//     color:"black",
//     backgroundColor:"white"
//   })
//   setmybtn("Dark Mode")
// }
// }

// style={mystyle} > in 65th line
  return (
<>
    <div className="container my-4" style={{color:props.mode==="dark"?"white":"black"}}>  
        <h2>{props.heading}</h2>
        <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}} value= {text} onChange={handleonchange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-warning" onClick={handleUpClick}>Get Upper text</button>
<button className="btn btn-info mx-2" onClick={handleLoClick}>Get Lower text</button>
<button className="btn btn-primary mx-2" onClick={copyText}>Copy</button>
<button className="btn btn-danger mx-2" onClick={resetAll}>Reset</button>
{/* <button className="btn btn-dark mx-5" onClick={themechange}>{mybtn}</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> words & <b>{text.length} </b>characters</p>
        <p><b>{0.008*text.split(" ").length}</b> Minutes to read</p>
        <h2>Preview your text</h2>
        <p>{text.length>0?text:"Enter something above there..."}</p>
    </div>
    </>
  )
}
