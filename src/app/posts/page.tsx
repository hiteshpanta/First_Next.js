import { PostModel } from '@/models/model';
import axios from 'axios'
import React from 'react'

export default async function Postpage() {

    // const posts = [
    //     {id: 1, title: 'hello'},
    //     {id:2, title: 'sello'},
    // ]

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = response.data;
  return (
    <div>
        {posts.map((post: PostModel) => {
            return <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        }
        )}
    </div>
  )
}
