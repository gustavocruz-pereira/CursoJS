import './style.css'
import { Outlet, useParams } from 'react-router-dom'

export const Posts = () => {
    const params = useParams()
    const { id } = params
    return (
        <div>
            <h1>Post {id}</h1>
            <Outlet />
        </div>
    )
}