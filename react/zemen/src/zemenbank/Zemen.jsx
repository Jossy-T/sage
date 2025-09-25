import {useState} from "react"
import Spline from '@splinetool/react-spline';
import logo from '../unnamed (1).png'; // adjust path if needed


function Zemen(){
const [firstName, setFirstName]= useState("")
const [lastName, setLastName]= useState("")
const [password, setPassword]= useState("")
const [email, setEmail]= useState("")
const [gender, setGender]= useState("")
const [checkbox, setCheckbox]= useState([])


// const handleHobbyChange = (e) => {
// const value = e.target.value;
// if (e.target.checked) {
//     setCheckbox([...checkbox, value]);
// } else {
//     setCheckbox(checkbox.filter(h => h !== value));
// }
// };

const handleSubmit=(e)=>{

    e.preventDefault();
    alert(
        "First Name:  "+ firstName + "\n"+
        "Last Name:  "+ lastName + "\n"+
        // "password:"+ password + "\n"+
        "Email:"+ email +"\n"+
        "sex:  "+ gender + "\n"
        // "Hobbies:  "+ checkbox + "\n"
    );
}

            
        
return <div>
    <div>
        <h1 style={{color:"white", backgroundColor:"red", display:"flex", justifyContent:"center", borderRadius:"10px", padding:"10px 0px"}}>Zemen Bank</h1>
    </div>

    <div style={{display:"inline-flex", flexDirection:"row", justifyContent:"space-evenly"}}>
        <div> <img src={logo} alt="logo" style={{width:"800px", height:"450px"}}/> 
    </div>


    <div style={{display:"flex", justifyContent:"center" , flexDirection:"column", margin:"-100px"}}>
        <form onSubmit={handleSubmit}>

            <h2 style={{display:"flex", justifyContent:"center"}}>Sign Ups</h2>

            <div style={{display:"flex", flexDirection:"column",alignItems:"center", padding:"0px 10px"}}>
                <div style={{display:"flex",margin:"30px" ,textAlign:"center"}}>

                    {/* first Name */}
                    <label htmlFor="firstName"></label>
                    <input style={{width:"200px", height:"30px", color:"red", borderRadius:"10px", margin:"0px 10px",padding:"4px",fontWeight:"bold"}} 
                    type="text" id="firstName" placeholder="First Name" name="firstName" required
                    onChange={ (e)=> setFirstName(e.target.value)
                    }/> <br/><br/>

                    {/* Last Name*/}
                    <label htmlFor="lastName"></label>
                    <input  style={{width:"200px", height:"30px", color:"red", borderRadius:"10px", padding:"4px",fontWeight:"bold"}}  
                    type="text" id="lastName" placeholder="Last Name" name="lastName" required

                    onChange={ (e)=> setLastName(e.target.value)
                    }/><br/><br/>

                </div>

                <div>
                    <label htmlFor="Email"></label>
                    <input style={{width:"200px", height:"30px", color:"red", borderRadius:"10px", margin:"0px 10px",padding:"4px",fontWeight:"bold"}} 
                    type="email" id="Email" name="Email" placeholder="Email" required
                    onChange={ (e)=> setEmail(e.target.value)}/>

                    <label for="password"></label>
                    <input style={{width:"200px", height:"30px", color:"red", borderRadius:"10px", padding:"4px",fontWeight:"bold"}} 
                    type="password" id="password" name="password" placeholder="Password" required
                    onChange={ (e)=> setPassword(e.target.value)}/>
                </div>

                <div style={{textAlign:"center",margin:"20px 0px"}}>
                    {/* male female */}
                    <label htmlFor="maleradio">Male</label>
                    <input  style={{marginRight:"30px"}}  type="radio" id="maleradio" name="gender" value="male" required
                    onChange={(e)=> setGender(e.target.value)}/>

                    <label htmlFor="femaleradio">Female</label>
                    <input type="radio" id="femaleradio" name="gender" value="female" required
                    onChange={(e)=> setGender(e.target.value)}/><br/><br/>

                     <label for="country"></label>
                        <select style={{display:"flex",flexDirection:"column",width:"200px", height:"30px", color:"red", borderRadius:"10px", margin:"20px",padding:"4px",fontWeight:"bold"}} 
                            name="country" id="country">
                            <option value="eth">Ethiopia</option>
                            <option value="USA">USA</option>
                            <option value="uk">England</option> 
                        </select>


                    {/* button */}
                    <button style={{display:"inline-block", textAlign:"center", width:"120px",
                    backgroundColor:"black",color:"white", borderRadius:"10px", padding:"10px 10px"}} type="submit">signup</button>
                
                </div>
            </div>
        
        </form>
    </div>
</div>
    <div>
        <Spline style={{zIndex:100}} scene="https://prod.spline.design/3Due2Yzbji2HOP56/scene.splinecode" />
    </div>
</div>
}

export default Zemen







{/* <br/><br/>
<h3> First Name: {firstName}</h3>
<h3>Last Name: {lastName}</h3>
<h3>Sex: {gender}</h3>
<h3>Hobbies: {checkbox}</h3> */}









{/* <div style={{textAlign:"center"}}>

     checkbox 
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

    </div> */}