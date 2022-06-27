import {  useState } from 'react';
import "./input.css"
import Axios  from '../axios'
 function Input() {
  const [sname, setName] = useState("");
  const [sclass, setClass] = useState("");
  const [sroll, setRoll] = useState("");

  const postData =()=>{
    Axios.post('/students',{
      name:`${sname}`,
      class:`${sclass}`,
      roll:`${sroll}`,
    }).then((res)=>{
      console.log(res)
      window.location.reload();
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='inputForm'>
        <h1>Student Registation Form</h1>
        <div className='inputData'>
            <input placeholder='Name' type="text" onChange={(e)=>{setName(e.target.value)}}/>
            <input placeholder='Class' type="text" onChange={(e)=>{setClass(e.target.value)}}/>
            <input placeholder='Roll' type="text" onChange={(e)=>{setRoll(e.target.value)}}/>
            <button className='btn' onClick={postData}>Submit</button>
        </div>
    </div>
  )
}
export default Input;