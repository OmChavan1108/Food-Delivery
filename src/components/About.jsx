import './card.css'
import { users } from '../utils/user'
import User from "./User"
export default function About(){
    return(
    <div className="about-card">
        {users.map((i,idx)=>{
           return <User key={idx} user={i}/>
           })}
    </div>
    )
}