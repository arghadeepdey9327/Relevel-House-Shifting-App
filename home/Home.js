import {BsFillCloudHaze2Fill} from 'react-icons/bs';
import Form from './Form';
const Home=()=>{
    return <div className="container">
       <h1 style={{textAlign:"center"}}>Packers and Movers near me</h1>
       <h3 style={{textAlign:"center"}}>Compare quote and book online</h3>
       <p style={{textAlign:"center"}}><BsFillCloudHaze2Fill/></p>
       <Form/>
    </div>
};
export default Home;
