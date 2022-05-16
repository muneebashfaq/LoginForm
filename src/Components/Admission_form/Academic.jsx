import {Link} from 'react-router-dom'
const Acadamic=()=>{
    return(<>
        <div className="row">
            <h3>Student Admission Form</h3>
        </div>
        <div className="row">
            <div className="pagination_form">
            <Link to="/">
                <button class="button1">1</button><spam>Personal</spam>
                </Link>
                <Link to="/parental">
                <button class="button2">2</button><spam>Parental</spam>
                </Link>
                <Link to="/medical">
                <button class="button2">3</button><spam>Medical</spam>
                </Link>
                <Link to="/academic">
                <button class="button2">4</button><spam>Acadamic</spam>
                </Link>
                <Link to="/fileattachments">
                <button class="button2">5</button><spam>File Attachments</spam>
                </Link>
                <Link to="/fees">
                <button class="button2">6</button><spam>Fees</spam>
                </Link>
                <Link to="/view">
                <button class="button2">6</button><spam>View</spam>
</Link>
            </div>
        </div>
        <div className='row'>
            Academic page

        </div>

    </>)
}
export default Acadamic