import "./Registration.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsDownToLine,faEnvelope,faAudioDescription } from '@fortawesome/free-solid-svg-icons'
import download from '../Logo/download.jpg'
import { Link } from 'react-router-dom'
const Form =()=>{
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
    <div className="row"><div className="col-md-3">
    <div className="registartion_form">
        <label>
            Student ID
        </label>
        <div className="student_id">

        </div>
    </div>
</div>


<div className="col-md-3">
    <div className="registartion_form">
        <label>
            Registration ID
        </label>
        <div className="registration_id">
            <b>Not Selected</b>
        </div>
    </div>
</div>


<div className="col-md-3">
    <div className="registartion_form">
        <div className="registarion_addmission">
            <FontAwesomeIcon icon={faArrowsDownToLine} className="arrow"></FontAwesomeIcon >Registered Admissions
        </div>
    </div>
</div>

<div className="col-md-3">
    <div className="registartion_form">
        <img src={download} className="picture" />
    </div>
</div>
</div>

<div className="row">
<div className="col-md-3">
    <label>* Student First Name</label>
    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
<div class="input-group mb-2 mr-sm-2">
<div class="input-group-prepend">

</div>
<input type="text" class="form-control form" id="inlineFormInputGroupUsername2" placeholder="Student First Name"/>
<div class="input-group-text">FN</div>
</div>
</div>

<div className="col-md-3">
    <label>Student Last Name</label>
    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
<div class="input-group mb-2 mr-sm-2">
<div class="input-group-prepend">

</div>
<input type="text" class="form-control form" id="inlineFormInputGroupUsername2" placeholder="Student Last Name"/>
<div class="input-group-text">LN</div>
</div>
</div>



<div className="col-md-3">
    <label>Student @Email</label>
    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
<div class="input-group mb-2 mr-sm-2">
<div class="input-group-prepend">

</div>
<input type="text" class="form-control form" id="inlineFormInputGroupUsername2" placeholder="Enter Your Email"/>
<div class="input-group-text"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
</div>
</div>

<div className="col-md-3">

<button className="selector">Male</button>
<button className="selector">Female</button>
</div>
</div>
<div className="row rol">
<div className="col-md-3">
    <label>* Date of Birth <FontAwesomeIcon icon={faAudioDescription}></FontAwesomeIcon></label>
    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
<div class="input-group mb-2 mr-sm-2">
<div class="input-group-prepend">

</div>
<input type="date" class="form-control form" id="inlineFormInputGroupUsername2" placeholder="Student First Name"/>
</div>
</div>
<div className="col-md-3">
    <label>* Religion <FontAwesomeIcon icon={faAudioDescription}></FontAwesomeIcon></label>
    <div class="input-group mb-3">

<select class="custom-select" id="inputGroupSelect01">
<option selected>Select Religion... <FontAwesomeIcon icon={faAudioDescription}></FontAwesomeIcon></option>
<option value="1">Islam</option>
<option value="2">Christianity</option>
<option value="3">Hinduism </option>
</select>
</div>
</div>

<div className="col-md-3">
    <label>* Mother Toung <FontAwesomeIcon icon={faAudioDescription}></FontAwesomeIcon></label>
    <div class="input-group mb-3">

<select class="custom-select" id="inputGroupSelect01">
<option selected>Select Languages... <FontAwesomeIcon icon={faAudioDescription}></FontAwesomeIcon></option>
<option value="1">Urdu</option>
<option value="2">English</option>
<option value="3">Punjabi </option>
</select>
</div>
</div>
<div className="col-md-3">
    <label>* B-Form <FontAwesomeIcon icon={faAudioDescription}></FontAwesomeIcon></label>
    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
<div class="input-group mb-2 mr-sm-2">
<div class="input-group-prepend">

</div>
<input type="text" class="form-control form" id="inlineFormInputGroupUsername2" placeholder="National Identity"/>

</div>
</div>
</div>
<div className="row">

<div class="form-group">
<label for="exampleFormControlTextarea1">Example textarea</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Add Details About this New admission for example any history"></textarea>
<p></p>
</div>
</div>
<div className="row">
<div className="col-2">
<button type="button" class="btn btn-primary">Next</button>
</div>
</div>
       
    </>)
}

export default Form