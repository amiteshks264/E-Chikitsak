
import React, { useState, useEffect } from 'react';
import "../Styles/AppointmentForm.css";

export default function Appoitmentform() {
    const initialValues = { FullName: "", PhoneNo: "", Gender: "", AppointmentDate: "", PreferredMode: "", PreferredDoc: "", City: "", PinCode: "", Agreement: "" };
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        setisSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            alert("Appointment Booking Form is Successfully Submitted");
            window.location.reload();
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regexphoneno = /^\+91 [0-9]{10}$/;
        if (!values.FullName) {
            errors.FullName = "Name is required!";
        }
        if (!values.PhoneNo) {
            errors.PhoneNo = "Phone Number is required!";
        }
        else if (!regexphoneno.test(values.PhoneNo)) {
            errors.PhoneNo = "Phone Number is Invalid!";
        }
        if (!values.Gender) {
            errors.Gender = "Gender is required!";
        }
        if (!values.AppointmentDate) {
            errors.AppointmentDate = "Appointment Date is required!";
        }
        if (!values.PreferredMode) {
            errors.PreferredMode = "Preferred Mode is required!";
        }
        if (!values.PreferredDoc) {
            errors.PreferredDoc = "Preferred Doctor is required!";
        }
        if (!values.City) {
            errors.City = "City is required!";
        }
        if (values.City > 28) {
            errors.City = "Please check the city name. It seems longer than general!";
        }
        if (!values.PinCode) {
            errors.PinCode = "PinCode is required!";
        }
        else if (values.PinCode > 999999) {
            errors.PinCode = "PinCode is Invalid!";
        }
        if (!values.Agreement) {
            errors.Agreement = "Please check this !";
        }
        return errors;
    };

    return (
        <>
        <div className="heading my-3">
            <h1 id="Form-page-heading">E-Chikitsak</h1>
        </div>
        <div className="form-content my-3">
            <div className="container my-3">
                <div className="Form-heading">
                    <h2>Appointment Form</h2>
                </div>
                <form className="row g-3 my-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label">
                        <span className="star">*</span>Full Name
                        </label>
                        <input type="text" className="form-control"
                            name="FullName"
                            id="inputName"
                            placeholder="Enter your name here.."
                            value={formValues.FullName}
                            onChange={handleChange}
                        />
                        <p className="errorMessage">{formErrors.FullName}</p>
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="phonenumber" className="form-label">
                        <span className="star">*</span>Phone Number
                        </label>
                        <input type="tel" className="form-control" id="phonenumber"
                            name="PhoneNo"
                            placeholder='+91 ----------'
                            value={formValues.PhoneNo}
                            onChange={handleChange}
                        />
                        <p className="errorMessage">{formErrors.PhoneNo}</p>
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="selectGender" className="form-label">
                        <span className="star">*</span>Gender
                        </label>
                        <select className="form-select" aria-label="Default select example" id="selectGender"
                            name="Gender"
                            value={formValues.Gender}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Choose from below...</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Prefer not to say</option>
                        </select>
                        <p className="errorMessage">{formErrors.Gender}</p>
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="appointmentTime" className="form-label">
                        <span className="star">*</span>Appointment Date
                        </label>
                        <input type="datetime-local" className="form-control" id="appointmentTime"
                            name="AppointmentDate"
                            value={formValues.AppointmentDate}
                            onChange={handleChange}
                        />
                        <p className="errorMessage">{formErrors.AppointmentDate}</p>
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="selectMode" className="form-label">
                        <span className="star">*</span>Preferred Mode
                        </label>
                        <select className="form-select" aria-label="Default select example" id="selectMode"
                            name="PreferredMode"
                            value={formValues.PreferredMode}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Choose from below...</option>
                            <option value="1">Online (Via-Video Chat)</option>
                            <option value="2">Offline (Visit our clinic) </option>
                        </select>
                        <p className="errorMessage">{formErrors.PreferredMode}</p>
                    </div>


                    <div className="col-md-4">
                        <label htmlFor="inputDoctor" className="form-label">
                        <span className="star">*</span>Preferred Doctor
                        </label>
                        <select id="inputDoctor" className="form-select"
                            name="PreferredDoc"
                            value={formValues.PreferredDoc}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Choose from below...</option>
                            <option value="1">Dr. Kathryn Murphy</option>
                            <option value="2">Dr. Jacob Jones</option>
                            <option value="3">Dr. Kenny Wilson</option>
                            <option value="4">Dr. Albert Flores</option>
                        </select>
                        <p className="errorMessage">{formErrors.PreferredDoc}</p>
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                        <span className="star">*</span>City
                        </label>
                        <input type="text" className="form-control" id="inputCity"
                            name="City"
                            value={formValues.City}
                            onChange={handleChange}
                            placeholder='Enter your City name...'
                        />
                        <p className="errorMessage">{formErrors.City}</p>
                    </div>


                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">
                        <span className="star">*</span>PinCode
                        </label>
                        <input type="number" className="form-control" id="inputZip"
                            name="PinCode"
                            value={formValues.PinCode}
                            onChange={handleChange}
                            placeholder='Enter your Pincode...'
                        />
                        <p className="errorMessage">{formErrors.PinCode}</p>
                    </div>


                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                id="gridCheck"
                                name="Agreement"
                                defaultValue="1"
                                checked={formValues.Agreement}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="gridCheck">
                            <span className="star">*</span>Agree to Terms and Conditions
                            </label>
                        </div>
                        <p className="errorMessage">{formErrors.Agreement}</p>
                    </div>


                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="bottommsg">
        <span className="star" id='bottommsg'>*</span> <span>{" "} Indicates required to be filled !</span>
        </div>
        </>
    )
}
