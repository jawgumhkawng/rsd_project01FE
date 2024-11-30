import {
    Box, Typography, OutlinedInput, Button,

} from "@mui/material";

import { useApp } from "../AppProvider";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";


export default function Login() {
    const { setauth } = useApp();
    const navigate = useNavigate();

    const {
        register, handleSubmit, formState: { errors },
    } = useForm();

    const submitLogin = () => {
        setauth(true);
        navigate("/");
    }
    
    return (
        <Box>
            <Typography variant="h3" >Login</Typography>
            <form onSubmit={handleSubmit(submitLogin)}>
                <OutlinedInput 
                    {...register("username", { required: true })}
                    fullWidth
                    placeholder="username"
                    sx={{ mt : 2}}
                />
                {errors.username && (
                    <Typography color="error">username is required!</Typography>
                )}
                 <OutlinedInput 
                    {...register("password", { required: true })}
                    fullWidth
                    placeholder="password"
                    sx={{ mt : 2}}
                />
                {errors.password && (
                    <Typography color="error">password is required!</Typography>
                )}

                <Button sx={{ mt : 2}} type="submit" fullWidth variant="contained">Submit</Button>
            </form>
        </Box>
    )
}