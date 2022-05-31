import React,{useState} from "react"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./new.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const New=({inputs,title})=>{
  const[file, setFile]=useState("")
  console.log(file)
  return(
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://images.pexels.com/photos/12118291/pexels-photo-12118291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"} alt=""/>
          
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">Image:<DriveFolderUploadIcon className="icon"/></label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>

              {inputs.map(input=>(
              <div className="formInput" key={input.id}>
                <label htmlFor="">{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
               ))}
              <button>Send</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default New