import React from 'react'
import './students.css'
import Axios from '../axios'
export default function Students({sdata}) {
    const deleteStudent =(id)=>{
        Axios.delete(`/students/${id}`).then((response)=>{
            console.log(response);
            window.location.reload();
        }).catch((err)=>{
            console.log(err)
        })
    }
    const getStudent =(id)=>{
        Axios.get(`/students/${id}`).then((response)=>{
            console.log(response.data);
        })
    }
  return (
    <div className='students'>
        <h2>Students List</h2>
       <table className='student-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Roll</th>
                    <th>Action</th>
                </tr>
            </thead>  
            <tbody>
            {sdata.map((data)=>(
                <tr key={data._id}>
                    <td>{data.name}</td>
                    <td>{data.class}</td>
                    <td>{data.roll}</td>
                    <td>
                        <button className='delete-btn' onClick={(e)=>deleteStudent(data._id)}>Delete</button>
                        <button className='btn' onClick={(e)=>getStudent(data._id)}>Update</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table> 
    </div>
  )
}
