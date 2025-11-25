import { useRouteError } from "react-router-dom"
import './Error.css'
function Error() {
    const err=useRouteError();
    console.log(err)
  return (
    <div className="error-Con">
        <h1>OPPS...!</h1>
        <h2>Something went Wrong</h2>
        <h3>{err.status}:{err.statusText}</h3>
        <p>{err.error.message}</p>
    </div>
  )
}

export default Error