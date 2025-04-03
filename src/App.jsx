import React, { useEffect, useState } from 'react'
import {Link} from 'react-router';
import StudentCard from "./Components/StudentCard"
import axios from 'axios'
import AddIcon from './assets/add.png'


const App = () => {

const [students, setStudents] = useState([])


const loadStudents = async () => {
  
  const response = await axios.get("http://localhost:5001/allstudents");
  setStudents(response.data.data);

}

useEffect(()=> {
  loadStudents();
}, []);
    

  return (
    <>
    <div className=' flex flex-col items-center justify-start h-screen bg-gray-200 '>
    <h1 className='text-center p-4 text-4xl'>Student List</h1>
    {students.map((stuList, i)=> {
      const {id, name, city} = stuList;

    return <StudentCard 
    key={i} 
    id={id}
    name={name} 
    city={city}
    loadStudents={loadStudents}
    />;
    })}
    
      <Link to="/add">
      <img src={AddIcon} alt="Add" className='h-[50px] fixed bottom-5 right-5  cursor-pointer' />
      </Link>
    </div>
    </>
    
  )
}

export default App