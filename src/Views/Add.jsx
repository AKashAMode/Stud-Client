import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const Add = () => {

    const [student, setStudent] = useState({
        id: "",
        name: "",
        city: ""
    });

    const addStudent = async ()=> {
     
        try{    
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/student`, {
            id:student.id,
            name:student.name,
            city:student.city
        });

        if(response.data.success){
            setStudent({
                id:"",
                name:"",
                city:"",
            });
    
            toast.success(response.data.message)
        }else {
            toast.error(response.data.message)
          }

        }catch(e){
            console.log(e);
            toast.error(e.response.data.message)
        }
         
    }


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200 '>
   <h1 className='text-center p-4 bg-blue-600 text-white border-none rounded-xl mt-6 text-2xl'>Add Students</h1>

     <div className='flex flex-col items-center justify-center w-[350px] h-[400px] border-none rounded-xl p-5 m-auto mt-10 bg-white shadow-lg'>

      <input 
      type='text' 
      placeholder='Enter Id' 
      className='border p-2 rounded-xl my-2 bg-white'
      value={student.id}
      onChange={(e)=> {
        setStudent({...student, id: e.target.value})
      }}
      />

      <input type='text' 
      placeholder='Enter Name' 
      className='border p-2 rounded-xl my-2 bg-white' 
      value={student.name}
      onChange={(e)=> {setStudent({...student, name: e.target.value})}}
      />

      <input type='text' 
      placeholder='Enter City' 
      className='border p-2 rounded-xl my-2 bg-white' 
      value={student.city}
      onChange={(e)=> {setStudent({...student, city:e.target.value})}}
      />

    <button className='bg-blue-600 text-white p-2 mt-4 rounded cursor-pointer'
    onClick={addStudent}
    >Add Student</button>
    </div> 

    <Toaster/>
    </div>
  )
}

export default Add;