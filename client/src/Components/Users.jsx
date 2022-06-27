import React, { useState, useEffect } from "react";
import "./Users.css"
import axios from "axios";

const Users = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/users?page=${page}&size=${size}`);
        setData(response.data);
    }

    const updateData = (id) => {
        console.log("ID is:", id);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ display: "grid", gap: "15px", alignContent: "start", justifyContent: "center" }}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e) => {
                            return (
                                <tr className="active-row">
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td onClick={() => {
                                        updateData(e._id)
                                    }}>View / Edit</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div style={{ display: "flex", gap: "10px", flexDirection: "row", height: "8vh", justifyContent: 'center', alignItems: "center", marginTop: "1vh" }}>
                <button>Prev</button>
                <p onClick={(e) => {
                    console.log("E:::::", e.target.innerText)
                }}>1</p>

                <p onClick={(e) => {
                    console.log("E:::::", e.target.innerText)
                }}>2</p>

                <p onClick={(e) => {
                    console.log("E:::::", e.target.innerText)
                }}>3</p>

                <p onClick={(e) => {
                    console.log("E:::::", e.target.innerText)
                }}>4</p>

                <p onClick={(e) => {
                    console.log("E:::::", e.target.innerText)
                }}>5</p>
                <button>Next</button>
            </div>
        </div>
    )
}
export default Users;