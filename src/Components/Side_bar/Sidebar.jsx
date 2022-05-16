import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDoorClosed,faUserGroup,faChessBoard } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
const Sidebar=()=>{
    return(<>
     <div><FontAwesomeIcon className='sidebaricons' icon={faDoorClosed}/></div> 
      <div><FontAwesomeIcon className='sidebaricons' icon={faUserGroup}/></div>
      <div><FontAwesomeIcon className='sidebaricons' icon={faChessBoard}/></div> 

    </>)
}
export default Sidebar