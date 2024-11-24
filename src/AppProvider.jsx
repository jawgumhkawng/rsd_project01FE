/** @format */

import { createContext, useContext, useState, useMemo } from 'react';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import App from './App';
const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

export default function AppProvider() {
    const [showForm, setShowForm] = useState(false);
    const [mode, setMode] = useState('dark');

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode,
            },
        });
    }, [mode]);

    return (
        <AppContext.Provider value={{ showForm, setShowForm, mode, setMode }}>
            <ThemeProvider theme={theme}>
                <App />
                <CssBaseline />
            </ThemeProvider>
        </AppContext.Provider>
    );
}
