import './card.css'
export default function User({user}) {
  let props=user

  return (
    <div className="userClass">
     <img src={props.img} alt="no image" className="userimg"/>
     <h3>Name:{props.name}</h3>
     <p>Role:{props.role}</p>
     <p>Description:{props.desc}</p>
     <p>Contact:{props.contact}</p>
     <h6>Location:{props.location}</h6>   
    </div>
  )
}
