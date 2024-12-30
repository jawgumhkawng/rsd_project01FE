/** @format */

import { Box, Typography, OutlinedInput, Button } from '@mui/material';

// import { useApp } from '../AppProvider';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

async function postUser(data) {
    const res = await fetch('http://localhost:8000/users', {    
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Network response was not ok');
    }

    return res.json();
}


export default function Register() {
    // const { setAuth } = useApp();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const create = useMutation(postUser, {
        onSuccess: () => {
            navigate('/Login');
        },
        // onError: (error) => {
        //     console.log(error);
        // },
    });

    const submitRegister = data => {
        create.mutate(data);
    };

    // const submitLogin = () => {
    //     setAuth(true);
    //     navigate('/Login');
    // };

    return (
        <Box>
            <Typography variant='h3'>Register</Typography>
           <form onSubmit={handleSubmit(submitRegister)}>
				<OutlinedInput
					{...register("name", { required: true })}
					fullWidth
					placeholder="name"
					sx={{ mt: 2 }}
				/>
				{errors.name && (
					<Typography color="error">name is required</Typography>
				)}

				<OutlinedInput
					{...register("username", { required: true })}
					fullWidth
					placeholder="username"
					sx={{ mt: 2 }}
				/>
				{errors.username && (
					<Typography color="error">username is required</Typography>
				)}

				<OutlinedInput
					{...register("bio")}
					fullWidth
					placeholder="bio"
					sx={{ mt: 2 }}
				/>

				<OutlinedInput
					{...register("password", { required: true })}
					fullWidth
					type="password"
					placeholder="password"
					sx={{ mt: 2 }}
				/>
				{errors.password && (
					<Typography color="error">password is required</Typography>
				)}

				<Button
					sx={{ mt: 2 }}
					type="submit"
					fullWidth
					variant="contained">
					Register
				</Button>
			</form>
        </Box>
    );
}
