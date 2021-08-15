import React, { useRef, useState } from 'react';
import './App.css';
import Counter from './components/Countet';
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

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body,
        };
        console.log(newPost);
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    };
    return (
        <div className='App'>
            <form>
                <MyInput
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Заголовок'
                />
                <MyInput
                    type='text'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder='Описание поста'
                />

                <MyButton onClick={addNewPost}>Отправить</MyButton>
            </form>
            <br />
            <PostList posts={posts} title={'Список постов1'} />
        </div>
    );
}

export default App;
