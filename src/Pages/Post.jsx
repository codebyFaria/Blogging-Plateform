import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import services from "../Appwrite/config";
import { Button, container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    console.log("I am on Post Page")
  
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userid === userData.$id : false;
    console.log(isAuthor)

useEffect(() => {
    console.log("Slug:", slug); // Add this
    if (slug) {
        services.getPost(slug).then((post) => {
            if (post) {
                setPost(post);
                console.log("Post found:", post);
                  console.log(services.getFileView(post.featuredimage));
            } else {
                console.log("Post not found, navigating home.");
                navigate("/");
            }
        });
    } else {
        console.log("No slug found, navigating home.");
        navigate("/");
    }
}, [slug, navigate]);

    const deletePost = () => {
        services.deletePost(post.$id).then((status) => {
            if (status) {
               services.deleteFile(post.featuredimage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 m-4 h-[750px]">
            <container>

                <div className="w-full h-[400px] w-full flex justify-center  mb-4 relative ">

                    <img
                        src={services.getFileView(post.featuredimage)}
                        alt={post.title}
                        className="rounded-xl border-green-900 border-2 p-5"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 ">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button className="hover:bg-black-700" bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl text-center font-bold">{post.title}</h1>
                </div>
                <div className="text-center browser-css">
                    {parse(post.content)}
                    </div>
            </container>
        </div>
    ) : null;
}