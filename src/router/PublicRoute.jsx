import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"


export const PublicRoute = ({children}) => {
    const {user} = useContext(AuthContext)
  return (!user?.logged) ? children : <Navigate to="/marvel"/>
}
