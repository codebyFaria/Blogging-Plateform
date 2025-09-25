import React, { useEffect, useState } from 'react'
import services from "../Appwrite/config";
import { Button, container, PostCard } from '../components/index'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        services.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


    if (userData === null) {
        return (
            <div className="relative w-full h-[100vh] flex items-center justify-center">
                {/* Background image */}
                <div className="absolute inset-0 bg-[url('../blog-imag.jpg')] bg-cover bg-center"></div>

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/55"></div>

                {/* Content */}
                <div className="relative mx-auto z-10 w-full max-w-full text-center text-white">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Blogging Platform</h1>
                    <p className="mb-8 text-2xl">Discover amazing articles and insights from our community.</p>
                    <Link to="/login">
                        <button className="px-8 py-3 cursor-pointer text-lg font-semibold text-black bg-white rounded-full border-2 shadow-lg  hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                            Please login to read posts
                        </button>
                    </Link>
                </div>
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