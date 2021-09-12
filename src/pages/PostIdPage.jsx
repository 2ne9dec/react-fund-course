import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({id:  0, title: ''});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, []);

  return (
    <div>
      <h1>{`Вы открыли страницу поста ID = ${id}`}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}</div>
      }
      {isComLoading
        ? <Loader />
        : <div>
          {comments.map(comm => {
            return <div key={comm.email} style={{marginTop: '15px'}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          })}
        </div>
      }
    </div>
  );
};

export default PostIdPage;
