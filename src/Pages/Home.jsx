import React, {useEffect, useState} from 'react'
import services from "../Appwrite/config";
import {container, PostCard} from '../components/index'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state)=>state.auth.userData)

    useEffect(() => {
        services.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  

    if (userData === null) {
          return (
            <div className="w-full h-[60vh] py-8 bg-white flex items-center justify-center">
                <container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <Link to="/login" >
                                <h1 className="text-2xl font-bold mb-4">
                                    Please login to read posts
                                </h1>
                            </Link>
                        </div>
                    </div>
                </container>
            </div>
        )
    }

    return (
        <div className='w-full px-5 py-8 bg-white flex items-center'>
            <container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </container>
        </div>
    )
}

export default Home