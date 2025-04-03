import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import { useParams } from 'react-router'

const Edit = () => {

const [student, setStudent] = useState({
    id: "",
    name: "",
    city: ""
});

const {userId} = useParams();

const editStudent = async () => {

   try{
    const response = await axios.put(`http://localhost:5001/student/${userId}`, 
        {
        name:student.name,
        city:student.city
    });

    if(response.data.success){
        toast.success(response.data.message);
    }else{
        toast.error(response.data.message);
    }
   }catch(e){
    toast.error(e.response.data.message)
   }

}


const loadStudents = async  () => {

    try{
      const response = await axios.get(`http://localhost:5001/student/${userId}`);
      setStudent(response.data.data); 
    }catch(e){
        toast.error(e.response.data.message)
    }


}


useEffect(()=> {
   if(userId){
    loadStudents();
   }
}, [userId])


  return (
    <div>
         <div className='flex flex-col items-center justify-center h-screen bg-gray-200 '>
          <h1 className='text-center p-4 border rounded-2xl m-2 text-2xl'>Edit Students({userId})</h1>
       
            <div className='flex flex-col items-center justify-center w-[350px] h-[400px] border-none rounded-xl p-5 m-auto mt-10 bg-white shadow-lg'>
       
             <input 
             type='text' 
             placeholder='Enter Id' 
             className='border p-2 rounded-xl my-2 bg-white'
             value={student.id}
             onChange={(e)=> {
               setStudent({...student, id: e.target.value})
             }}
             disabled/>
       
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
           onClick={editStudent}
           >Save Student</button>
           </div> 
       
           <Toaster/>
           </div>
    </div>
  )
}

export default Edit