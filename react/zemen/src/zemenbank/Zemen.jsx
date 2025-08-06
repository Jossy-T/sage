import {useState} from "react"
import logo from '../unnamed (1).png'; // adjust path if needed


function Zemen(){
    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    // const [password, setPassword]= useState("")
    const [gender, setGender]= useState("")
    const [checkbox, setCheckbox]= useState([])

    
    const handleHobbyChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckbox([...checkbox, value]);
    } else {
      setCheckbox(checkbox.filter(h => h !== value));
    }
  };

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(
            "First Name:  "+ firstName + "\n"+
            "Last Name:  "+ lastName + "\n"+
            // "password:"+ password + "\n"+
            "sex:  "+ gender + "\n"+
            "Hobbies:  "+ checkbox + "\n"
        );
    }

                
            
       return<div>
        <div>
            <h1 style={{color:"white", backgroundColor:"red", display:"flex", justifyContent:"center", borderRadius:"10px", padding:"10px 0px"}}>Zemen Bank</h1>
        </div>
            <div style={{display:"inline-flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <div> <img src={logo} alt="logo" style={{width:"800px", height:"450px"}}/> </div>

                <div style={{display:"flex", justifyContent:"center" , flexDirection:"column", margin:"-100px"}}>
                <form onSubmit={handleSubmit}>

                    <h2 style={{display:"flex", justifyContent:"center"}}>Sign Ups</h2>

                    <div style={{ textAlign:"center"}}>
                        {/* first Name */}
                        <lable htmlFor="firstName"></lable>
                        <input style={{width:"200px", height:"30px", color:"red", borderRadius:"10px", padding:"4px",fontWeight:"bold"}} 
                        type="text" id="firstName" placeholder="First Name" name="firstName" required
                        onChange={ (e)=> setFirstName(e.target.value)
                        }/> <br/><br/>

                        {/* Last Name*/}
                        <lable htmlFor="lastName"></lable>
                        <input  style={{width:"200px", height:"30px", color:"red", borderRadius:"10px", padding:"4px",fontWeight:"bold"}}  
                        type="text" id="lastName" placeholder="Last Name" name="lastName" required

                        onChange={ (e)=> setLastName(e.target.value)
                        }/><br/><br/>
                    </div>

                        <div style={{textAlign:"center"}}>
                    {/* male female */}
                    <label htmlFor="maleradio">Male</label>
                    <input  style={{marginRight:"30px"}}  type="radio" id="maleradio" name="gender" value="male" required
                    onChange={(e)=> setGender(e.target.value)}/>

                    <label htmlFor="femaleradio">Female</label>
                    <input type="radio" id="femaleradio" name="gender" value="female" required
                    onChange={(e)=> setGender(e.target.value)}/><br/><br/>
                    </div>

                    <div style={{textAlign:"center"}}>
                    {/* checkbox */}
                    <label htmlFor="reading checkbox">reading</label>
                    <input type="checkbox" id="reading checkbox" name="checkbox" value="reading"
                    onChange={handleHobbyChange}/><br/>

                    <label htmlFor="movie checkbox">movie</label>
                    <input type="checkbox" id="movie checkbox" name="checkbox" value="movie"
                    onChange={handleHobbyChange}/><br/>
                    <label htmlFor="music checkbox">music</label>
                    <input type="checkbox" id="music checkbox" name="checkbox" value="music"
                    onChange={handleHobbyChange}/><br/>

                    <label htmlFor="sport checkbox">sport</label>
                    <input type="checkbox" id="sport checkbox" name="checkbox" value="sport"
                    onChange={handleHobbyChange}/><br/><br/>

                    <button style={{display:"inline-block", textAlign:"center", 
                    backgroundColor:"black",color:"white", borderRadius:"10px", padding:"10px 10px"}} type="submit">create Account</button>
                    </div>
            
                </form>
                {/* <br/><br/>
                <h3> First Name: {firstName}</h3>
                <h3>Last Name: {lastName}</h3>
                <h3>Sex: {gender}</h3>
                <h3>Hobbies: {checkbox}</h3> */}
            </div>
    </div>
    </div>
}

export default Zemen