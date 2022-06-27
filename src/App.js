import './App.css';
import Input from './components/input';
import Students from './components/Students';
import Axios from './axios';
import { useEffect, useState } from 'react';
function App() {
  const [stdData , setStudent] = useState([])
  const getData = ()=>{
    Axios.get('/students').then((res)=>{
      setStudent(res.data);
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
      <Input/>
      <Students sdata={stdData}/>
    </div>
  );
}

export default App;
