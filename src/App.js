import React, { useState } from 'react';
import './App.css';
import Counter from './components/Countet';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Javascript2', body: 'Description' },
        { id: 3, title: 'Javascript3', body: 'Description' },
    ]);
    return (
        <div className='App'>
            <br />
            <form>
                <input placeholder='Заголовок'></input>
                <input placeholder='Описание поста'></input>
                <button>Отправить</button>
            </form>
            <br />
            <PostList posts={posts} title={'Список постов1'} />
        </div>
    );
}

export default App;
