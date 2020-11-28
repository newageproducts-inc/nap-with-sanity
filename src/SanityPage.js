import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from "./client.js";


function SanityPage() {

    const [allPostData, setAllPostData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                "name" : author->name,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body
            }`
        )
        .then((data) => setAllPostData(data))
        .catch(console.error);
    }, [])

    return (
        <div className="sanity_container">
            <h1>Sanity Page</h1>
            <div className="sanity_wrapper">
                {
                    allPostData && 
                    allPostData.map((post,index) => (
                        <Link to={'/' + post.slug.current} key={post.slug.current}>
                            <span key={index}>
                                <img src={post.mainImage.asset.url} alt="Sanity Image" />
                            </span>
                            <span>
                                {/* Show Title and Author Field Content of Sanity Dashboard */}

                                <h2>Title : {post.title}</h2>
                                <h2>Author : {post.name}</h2>

                                {/* Show Body Field Content of Sanity Dashboard */}
                                <BlockContent
                                        blocks={post.body}
                                        projectId={sanityClient.clientConfig.projectId}
                                        dataset={sanityClient.clientConfig.dataset}
                                    />
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default SanityPage
