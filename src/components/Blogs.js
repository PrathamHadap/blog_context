import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner'


export const Blogs = () => {
    const {loading,posts} = useContext(AppContext);
  return (
    <div className='flex  flex-col max-w-[650px] justify-center items-center'>
        {
            loading ? (<Spinner/>)
            :( posts.lenght === 0 ? 
            (<div><p>No Post Found</p></div>)
            :(posts.map((post)=>(
                <div key={post.id}>
                    <p className='font-bold'>{post.title}</p>
                    <div>
                        By <span>{post.author}</span> on <span>{post.category}</span>
                    </div>
                    <div>Posted On {post.date}</div>
                    <div>{post.content}</div>
                     <div className='text-blue-700 font-bold'>
                     {post.tags.map((tag,index)=>{
                        return <span key={tag.index}>{`#${tag}`}</span>
                    })}
                     </div>
                </div>
            ))))
        }
    </div>
  )
}
