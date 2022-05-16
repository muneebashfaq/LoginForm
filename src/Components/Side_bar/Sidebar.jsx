import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDoorClosed,faUserGroup,faChessBoard } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar=()=>{
    return(<>
    <Link to="/page" className='sidebarlink'>
     <FontAwesomeIcon className='sidebaricons' icon={faDoorClosed}/> 
     </Link>
     <div>
     <Link to="/" className='sidebarlink'><FontAwesomeIcon className='sidebaricons' icon={faUserGroup} /></Link>
     </div>
      <div>
      <Link to="/page2" className='sidebarlink'> <FontAwesomeIcon className='sidebaricons' icon={faChessBoard}/>
      </Link></div> 

    </>)
}
export default Sidebar