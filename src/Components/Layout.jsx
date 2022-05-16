import '../App.css'
import Navigation from "./navigation/navigation.components";
import Sidebar from "./Side_bar/Sidebar";
import Registration from './Registration';
const Layout=()=>{
    return(<>
      <div className="row">
   <Navigation/>
   </div>
   <div className="row">
     <div className="col-1 side-bar">
     <Sidebar/>
     </div>
     <div className="col-10 bgcolor"> 
     <div className='form-container'><Registration/></div>

     </div>
   </div>
    </>)
}

export default Layout