import Parts from "./Parts";
import {AiFillHome} from 'react-icons/ai';
import { Link } from "react-router-dom";
const FirstView=()=>{
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
     <a className="navbar-brand"><AiFillHome /></a>
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item padd">
        <Parts text="ABOUT US"/>
     </li>
     <li className="nav-item padd">
        <Parts text="GET QUOTE"/>
     </li>
     <li className="nav-item padd">
        <Parts text="VENDORS"/>
     </li>
     <li className="nav-item padd">
        <Parts text="CONTACT"/>
     </li>
     <li className="nav-item dropdown padd">
     <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        FAQ
        </a>
     </li>
     <li className="nav-item dropdown padd">
     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        LOGIN
        </a>
        <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><a className="dropdown-item" href="#">SignUp</a></li>
        </ul>
     </li>
 
     </ul>
     </div>
    </nav>
};
export default FirstView;
