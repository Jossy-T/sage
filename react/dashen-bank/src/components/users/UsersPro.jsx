import {useParams} from "react-router-dom"

export default function UsersPro(){
    const Param=useParams()
  return<>
        <h2>{Param.id}</h2>
    </>
}