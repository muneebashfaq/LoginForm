import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBell } from '@fortawesome/free-solid-svg-icons'
import displaypics from '../Logo/dp.jpg'
import './navigation.styles.css'
import { ReactComponent as Crown } from '../Logo/crown.svg'

const Navigation = () => {

  const search =()=>{
      alert("you click on search")
  }
  const Notification=()=>{
    alert("you click on Notification")
}
    return (<>
        <div className="navigation">
            <div className="logo-container">
                <Crown className="logo" />
       
            </div>
            <div className="logo_text"><strong>NGSPortal</strong>
            <div>Branch Name</div>
            </div>
           
            <div className="input_field">
            <FontAwesomeIcon className='FontAwesomeIcon' icon={faMagnifyingGlass} onClick={search} ></FontAwesomeIcon >
          <input type="text" placeholder="Search.." name="search"
           className='search'/>
            </div>
                  
            
            <div className="nav-links-container">
                <div className="nav-link" > <FontAwesomeIcon className='FontAwesomeIcon' icon={faBell} onClick={Notification}></FontAwesomeIcon>
                </div>
                <div  >
                    <img src={displaypics} className="DisplayPic"/>
                </div>
                <div  >
                <small>Matrica</small>   
                </div>
                <div className="nav-link">
                <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  
</div>
</div>

              
            </div>
        </div>
    
    </>)
}
export default Navigation