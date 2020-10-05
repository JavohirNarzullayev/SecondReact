import React from "react";

const Table=({users})=>{
    console.log("Class",users)
    return (
        <div>
            <h1 className='text-center'>
                <table className='table table-active'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user)=>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                        </tr>
                        )
                    }

                    </tbody>
                </table>
            </h1>
        </div>
    )



}
export default Table;
//
