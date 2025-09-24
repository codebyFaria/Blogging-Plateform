import React, {useEffect, useState} from 'react'
import {container, PostForm} from '../components/index'
import services from "../Appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            services.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='h-[750px] py-8'>
        <container>
            <PostForm post={post} />
        </container>
    </div>
  ) : null
}

export default EditPost