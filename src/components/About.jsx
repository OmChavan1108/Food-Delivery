import { users } from '../utils/user'
import User from "./User"
export default function About(){
    return(
    <div className="min-h-screen w-full  from-gray-100 to-gray-300 py-10 px-6">

    <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700 drop-shadow-md"> Meet Our Team 👥</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">

        {users.map((user, idx) => (
          <div key={idx}
            className="w-72 bg-white shadow-xl rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200" >
            <User user={user} /> </div>
        ))}
      </div>
    </div>
    )
}