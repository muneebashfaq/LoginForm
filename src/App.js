
import './App.css'
import Navigation from './Components/navigation/navigation.components';
import Registration from '../src/Components/Admission_form/Registration';
import Sidebar from './Components/Side_bar/Sidebar';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Parental from './Components/Admission_form/Parental';
import Medical from './Components/Admission_form/Medical';
import Academic from './Components/Admission_form/Academic';
import Files from './Components/Admission_form/Files';
import Fees from './Components/Admission_form/Fees';
import Views from './Components/Admission_form/Views';

function App() {

  return (
   <>
      <div className="row">
   <Navigation/>
   </div>
   <div className="row">
     <div className="col-1 side-bar">
     <Sidebar/>
     </div>
     <div className="col-10 bgcolor"> 
     <div className='form-container'>
   
<Routes>
  
<Route  exact path="/" element={<Registration/>}></Route>
<Route path="/page" element={<Page1/>}/>
<Route path="/page2" element={<Page2/>}/>
<Route path="/parental" element={<Parental/>}/>
<Route path="/medical" element={<Medical/>}/>
<Route path="/academic" element={<Academic/>}/>
<Route path="/fileattachments" element={<Files/>}/>
<Route path="/fees" element={<Fees/>}/>
<Route path="/view" element={<Views/>}/>

</Routes>

     </div>

     </div>
   </div>
   </>
  );
}

export default App;
