import React, { useState, useEffect } from "react";
import "./Users.css";
import { Link } from 'react-router-dom';
import axios from "axios";

const Users = () => {
    const [data, setData] = useState([]);
    // const [users, setUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    // setUsers(data)
    let response;

    const fetchData = async () => {
        response = await axios.get(`http://localhost:8080/users?page=${page}`);
        setData(response.data.data);
        // setPage(Number(response.data.page));
        // setSize(Number(response.data.size));
    }

    const updateData = (id) => {
        console.log("ID is:", id);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handlePrev = async () => {
        setPage((page) => {
            if (page === 1) return page;
            return page - 1;
        });
        response = await axios.get(`http://localhost:8080/users?page=${page}`);
        setData(response.data.data);
    }

    const handlenext = async () => {
        setPage((page) => {
            if (page === pageCount) return page;
            return page + 1;
        });
        response = await axios.get(`http://localhost:8080/users?page=${page}`);
        setData(response.data.data);
    }

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
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <Link to={`/users/${e._id}`}>
                                        <button onClick={() => {
                                            updateData(e._id)
                                        }} class="button-2" role="button">Edit</button>
                                    </Link>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div style={{ display: "flex", gap: "10px", flexDirection: "row", height: "8vh", justifyContent: 'center', alignItems: "center", marginTop: "1vh" }}>
                <button disabled={page === 1} onClick={handlePrev}>Prev</button>
                <button disabled={page === pageCount} onClick={handlenext}>Next</button>
            </div>
        </div>
    )
}
export default Users;