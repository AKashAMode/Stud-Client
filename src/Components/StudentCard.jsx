import React from 'react'
import DeleteIcon from '../assets/delete.png'
import EditIcon from '../assets/edit.png'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import {Link} from 'react-router'



const StudentCard = ({id, name,city, loadStudents}) => {

  const deleteStudent  = async ()=> {

    const response = await axios.delete(`http://localhost:5001/student/${id}`);
  
    if(response.data.success){
      toast.success(response.data.message);
      loadStudents();
    }else{
      toast.error(response.data.message)
    }
  }


  return (
    <div className='rounded-xl bg-yellow-200 py-4 w-[60%]  mt-4 flex justify-between px-4 items-center shadow-lg'>
    <span className='px-4'>{id} - {name}</span>
    <span className='px-4'>{city}</span>
    <img src={DeleteIcon} alt="Delete" className='h-[30px] cursor-pointer'
    onClick={deleteStudent}
    />
      <Link to={`/edit/${id}`}>
      <img src={EditIcon} alt="Edit" className='h-[30px]  cursor-pointer' />
      </Link>
    <Toaster/>
  </div>
  )
}

export default StudentCard