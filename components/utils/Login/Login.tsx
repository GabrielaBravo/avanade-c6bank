import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

type LoginProps = {
    error: boolean;
}

export default function Login(props: LoginProps) {
    const [error, setError] = useState<boolean>(props.error);
    const handleSubmit = () => {
        setError(false)
    }
    
  return (
    <Box sx={{mt: 8, 
        display: 'flex',
        flexDirection:'column',
        alignItem: 'center'}}>
            <Typography component="h1" variant="h5">
                Tela de Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
                <TextField autoFocus={true} margin="normal" required id="email" name="email" fullWidth label="Digite o login"  autoComplete="email"/>
    
                <TextField margin="normal" required id="password" name="password" type="password" fullWidth label="Digite a Senha" autoComplete='current-password'/>
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="lembrar-me" />
            <Button type='submit' fullWidth variant='contained' sx={{mt:3, mb:2}}>
            Login
    
            </Button>
            {error && <Typography color="error">{props.error}</Typography>}
    
            </Box>
    </Box>
  )
}

