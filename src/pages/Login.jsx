/** @format */

import { Box, Typography, OutlinedInput, Button, Alert } from '@mui/material';
// import { useState } from 'react';
import { useApp } from '../AppProvider';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

async function postLogin(data) {
    const res = await fetch('http://localhost:8000/login', {    
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

export default function Login() {
    const { setAuth } = useApp();
    const navigate = useNavigate();

    // const [error, setError] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const login = useMutation(postLogin, {
        onSuccess: data => {
            setAuth(data.user);
            localStorage.setItem('token', data.token);
            navigate('/');
        },
        
        // onError: () => {
        //     setError("Invalid username or password");
        // },
    });
    const submitLogin = data => {
        login.mutate(data);
    };

    return (
		<Box>
			<Typography variant="h3">Login</Typography>

			{login.isError && (
				<Alert
					severity="warning"
					sx={{ mt: 2 }}>
					Invalid username or password
				</Alert>
			)}
			<form onSubmit={handleSubmit(submitLogin)}>
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
					Login
				</Button>
			</form>
		</Box>
	);
}
