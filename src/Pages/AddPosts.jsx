import {container,PostForm} from '../components/index'

function AddPosts() {
    return(
        <div className="bg-white py-8">
       <container>
        <PostForm/>
       </container>
        </div>
    )
}

export default AddPosts