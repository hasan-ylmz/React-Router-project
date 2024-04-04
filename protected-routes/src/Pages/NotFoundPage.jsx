import {Link} from "react-router-dom"
const NotFoundPage = () => {
  return (
    <> 
        <h1 className="mb-8">404 Not Found </h1>
        <Link className="transition ease-in-out delay-150 duration-500" to="/" >Home</Link>
    </>
  )
}

export default NotFoundPage