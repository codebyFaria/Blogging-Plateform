import { PostCard, container } from "../components/index";
import services from "../Appwrite/config";
import { useState, useEffect } from 'react'

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        services.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            else {
                console.log("Not getting Posts", error)
            }
        })
    }, [])


    return (
               <div className='w-full bg-white py-8 px-5'>
                   <container>
                       <div className='flex flex-wrap'>
                           {posts.map((post) => (
                               <div key={post.$id} className='p-2 w-1/4 p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                                   <PostCard {...post} />
                               </div>
                           ))}
                       </div>
                   </container>
               </div>
    );
}

export default AllPosts