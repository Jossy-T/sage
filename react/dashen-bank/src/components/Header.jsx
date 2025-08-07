import {Link} from "react-router-dom"
function Header(){
    return <>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/contact">contact</Link><br/>
         <Link to="/Cata">Category</Link><br/>
    </>
}
export default Header