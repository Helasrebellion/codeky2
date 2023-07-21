// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './blog.css'; // Import the custom CSS file

const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const apiEndpoint = 'https://sylviamullins.wpcomstaging.com/wp-json/wp/v2/posts';
        axios
            .get(apiEndpoint, { params: { per_page: 100 } })
            .then((response) => {
                setBlogPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching blog posts:', error);
            });
    }, []);

    const handlePostClick = (postId) => {
        setSelectedPost(postId);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#25a18e', padding: '10px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}>
                <h2 style={{ color: '#000' }}>Latest Blog Posts</h2>
                <div className="blog-posts-container">
                    {blogPosts.map((post) => (
                        <div key={post.id} onClick={() => handlePostClick(post.id)} className="blog-post-item" style={{ cursor: 'pointer' }}>
                            <a style={{ textDecoration: 'underline', color: '#000' }}>{post.title.rendered}</a>
                        </div>
                    ))}
                </div>
            </div>

            {selectedPost !== null && (
                <div style={{ marginBottom: '50px' }}>
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{
                            __html: `
              <div class="blog-post-content" style="background-color: black; padding: 20px; border-radius: 10px; color: #fff; text-align: center; max-height: 70vh; overflow-y: auto; overflow-x: auto;">
                <h1 style="margin-bottom: 20px; color: #fff;">${blogPosts.find((post) => post.id === selectedPost).title.rendered}</h1>
                <div class="blog-post-inner" style="max-width: 800px; margin: 0 auto; padding: 10px; color: #fff;">
                  ${blogPosts.find((post) => post.id === selectedPost).content.rendered}
                </div>
              </div>
              `,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default BlogList;
