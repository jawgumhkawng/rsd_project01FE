/** @format */

import { useState } from 'react';

import Header from './components/Header';
import Item from './components/Item';
import Form from './components/Form';
import AppDrawer from './components/AppDrawer';
import {useApp} from "./AppProvider";

import { Container } from '@mui/material';
import { Outlet } from 'react-router';

export default function App() {
    // const { showForm } = useApp();

    // const [posts, setPosts] = useState([
    //     { id: 3, content: 'Some Content', user: 'Alice' },
    //     { id: 2, content: 'More Content', user: 'Bob' },
    //     { id: 1, content: 'Another Content', user: 'Jaw' },
    // ]);

    // const add = (content) => {
    //     const id = posts[0].id + 1;
    //     setPosts([{ id, content, user: 'Jaw' }, ...posts]);
    // };

    // const remove = (id) => {
    //     setPosts(posts.filter((post) => post.id != id));
    // };

    return (
        <div>
            <Header />
            <AppDrawer />

            <Container
                sx={{ mt: 4 }}
                maxWidth='md'>
                     

                <Outlet />
            </Container>
        </div>
    );
}
