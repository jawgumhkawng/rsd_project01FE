/** @format */

import { Card, CardContent } from '@mui/material';
import { red } from '@mui/material/colors';
export default function Item({ post, remove }) {
    return (
        <Card sx={{ mb: 3 }}>
            <CardContent>
                <a
                    href='#'
                    style={{ float: 'right', color:'#f50a0a'}}
                    onClick={() => remove(post.id)}>
                    Del
                </a>
                
                <b>{post.user}</b>
                <div>{post.content}</div>
                
            </CardContent>
        </Card>
    );
}
