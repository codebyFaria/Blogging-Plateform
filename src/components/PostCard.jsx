import services from '../Appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full hover:border-green-900 m-2 border-2 shadow-lg bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img
            src={services.getFileView(featuredimage)}
            alt={title}
            className='rounded-xl w-full h-60 object-contain bg-white' 
          />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
