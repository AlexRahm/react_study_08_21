import React, { useRef, useState } from 'react';
import './App.css';
import Counter from './components/Countet';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Javascript2', body: 'Description' },
        { id: 3, title: 'Javascript3', body: 'Description' },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };
    return (
        <div className='App'>
            <PostForm create={createPost} remove={removePost} />
            <br />
            <PostList posts={posts} title={'Список постов1'} />
        </div>
    );
}

export default App;
