import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Form.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Form = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        date: "",
        email: "",
        id: "",
        name: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const submitData = async (e) => {
        e.preventDefault();
        const res = await axios.patch(`http://localhost:8080/users/${id}`, data)
        alert("Your data has been updated");
        navigate('/');
    }

    return (
        <div>
            <form className="container" method="POST">
                <div className="row input-container">
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input autoSave="true" onChange={handleChange} name="name" type="text" required />
                            <label>Name</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input onChange={handleChange} name="email" type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input" style={{ float: "right" }}>
                            <input onChange={handleChange} required type="date" />
                        </div>
                    </div>

                    <div className="col-xs-12">
                        <button onClick={submitData} className="btn-lrg submit-btn">Update</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Form;