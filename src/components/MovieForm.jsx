import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'


const MovieForm = ({history}) => {
    const {id}= useParams()
    const navigate = useNavigate()
  return (
    <>
    <div>MovieForm {id} </div>
    <button className='btn btn-primary' onClick={()=>navigate("/movies")}>save</button>
    </>
  )
}

export default MovieForm