import React from 'react'

export default function Block2() {
    return (
        <div className="blockStyle">
            <h1 style={{textAlign:"center", textDecoration:"underline",}} >Player 2</h1>
            <form>
                <input type="text" placeholder="Name" style={nameStyle}/>
                
               <select id="gender" name="genders" placeholder="Gender" style={optionStyle}>
                   <option style={optionStyle} value="female">Female</option>
                   <option value="male">
                       Male
                   </option>
               </select>
               <button style={buttonStyle}>Done!</button>
            </form>
        </div>
    )
}
const nameStyle ={
    marginTop: "20%",
    marginLeft: "5%",
    fontSize: "1.09em",
    backgroundColor: "rgba(10,10,10,0.5)",
    border: "2px solid black",
    boxShadow:"1px 2px 5px #0f2862",
    height: "30px",
    color:"black"
    
}
const optionStyle = {
    marginTop: "10%",
    width: "220px",

    marginLeft: "5%",
    fontSize: "1.09em",
    backgroundColor: "rgba(10,10,10,0.5)",
    border: "2px solid black",
    boxShadow:"1px 2px 5px #0f2862",
    height: "30px",
    color:"black"
}
const buttonStyle = {
    marginTop:"20%",
    marginLeft: "35%",
    width : "80px",
    height : "30px",
    fontSize:" 1em",
    backgroundColor:"#0f2862",
    border: "2px solid black",
    boxShadow:"1px 2px 5px black",
    borderRadius: "10px",
    color: " #1c77ac"

}