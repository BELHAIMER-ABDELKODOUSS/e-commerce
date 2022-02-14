import react from "react";
import './HomePage.scss';
import Directory from "../../Components/Directory/Directory";

const HomePage=(props)=>(
    
    <div className="homepage">
        {console.log(props)}
       <Directory />
    </div>
)
export default HomePage
