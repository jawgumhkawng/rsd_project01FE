/** @format */

import { Box,AppBar, Toolbar, Typography, IconButton, } from '@mui/material';

import { Add as AddIcon, LightMode as LightModeIcon, DarkMode as DarkModeIcon,} from '@mui/icons-material';

import { useApp } from '../AppProvider';
export default function Header() {
    const { showForm, setShowForm, mode, setMode } = useApp();
    return (
        <AppBar position='static'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>App</Typography>
                <Box sx={{display: "flex", gap: 1}}>
                <IconButton
                    color='inherit'
                    onClick={() => setShowForm(!showForm)}>
                    <AddIcon />
                </IconButton>
                {mode == "dark" ? (
                    <IconButton color='inherit' onClick={() => {
                        setMode("light");
                    }}>
                        <LightModeIcon/>
                    </IconButton>
                ) : (
                    <IconButton color='inherit' onClick={() => {
                        setMode("dark");
                    }}>
                        <DarkModeIcon/>
                    </IconButton>
                )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
