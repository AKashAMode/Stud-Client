import React from 'react'
import DeleteIcon from '../assets/delete.png'
import EditIcon from '../assets/edit.png'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import {Link} from 'react-router'



const StudentCard = ({id, name,city, loadStudents}) => {

  const deleteStudent  = async ()=> {

    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/student/${id}`);
  
    if(response.data.success){
      toast.success(response.data.message);
      loadStudents();
    }else{
      toast.error(response.data.message)
    }
  }


  return (
  <div className="bg-blue-200 shadow-md rounded-xl p-6 w-full max-w-xl mt-4 flex items-center justify-between">
  <div className="flex-1">
    <span className="text-lg font-semibold text-gray-800">{id}) {name}</span>
  </div>
  <div className="flex-1 text-center">
    <span className="text-gray-700 text-lg font-medium">{city}</span>
  </div>
  <div className="flex items-center space-x-6">
    <img 
      src={DeleteIcon} 
      alt="Delete" 
      className="h-8 w-8 cursor-pointer"
      onClick={deleteStudent}
    />
    <Link to={`/edit/${id}`}>
      <img 
        src={EditIcon} 
        alt="Edit" 
        className="h-8 w-8 cursor-pointer"
      />
    </Link>
  </div>
  <Toaster />
</div>
  )
}

export default StudentCard