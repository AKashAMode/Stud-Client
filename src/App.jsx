import React, { useEffect, useState } from 'react'
import {Link} from 'react-router';
import StudentCard from "./Components/StudentCard"
import axios from 'axios'
import AddIcon from './assets/add.png'


const App = () => {

const [students, setStudents] = useState([])


const loadStudents = async () => {
  
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/allstudents`);
  setStudents(response.data.data);

}

useEffect(()=> {
  loadStudents();
}, []);
    

  return (
    <>
    <div className=' flex flex-col items-center justify-start h-screen bg-gray-200 '>
    <h1 className='text-center p-2 text-4xl bg-blue-400 rounded-xl mt-6 text-white'>Student List</h1>
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
      <img src={AddIcon} alt="Add" className='h-[50px] fixed bottom-12 right-16  cursor-pointer transform hover:scale-110' />
      </Link>
    </div>
    </>
    
  )
}

export default App