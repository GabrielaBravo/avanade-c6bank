import React, { FormEvent, useEffect, useState } from 'react'
import {Typography, 
    Container, 
    Button, 
    Avatar, 
    TextField, 
    Checkbox, 
    Grid, 
    Box, 
    CssBaseline, 
    FormControlLabel,
    Stack,
    Snackbar} from '@mui/material';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { setDefaultResultOrder } from 'dns';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  
//@mui/material

type CopyProps = {
    site: String;
}
function Copyright (props: CopyProps) {
    return (
        <Typography>
            {'Copyright ©️'}
            <Link color="inherit" href={ `https://www.${props.site}`}>
            {props.site}

            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}

        </Typography>
    )
}

const theme = createTheme();

export default function LoginPage() {
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue> ('');
const [email, setEmail] = useState<string | null | undefined> ('');
const [error, setError] = useState<boolean>(false);
const [errorMessage, setErrorMessage] = useState<string>('');
const [open, setOpen] = useState<boolean>(false);
const [contador, setContador] = useState<number>(0);

const handleClose = ()=> {
    setOpen(false);
  }


useEffect(()=> {
    if(contador == 0) {
        document.title = `Executando useEffect a primeira vez. COntador: ${contador}`;
    }else{
        document.title = `Executando useEffect ${contador} vezes`;
    }
    console.log(`Executou o useEffect ${contador} vezes`)
}, [contador]);
 
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        setPassword(data.get('password'));
        
    }

    useEffect(()=> {
        
        if(password && password.length < 6){
            setError(true);
            setErrorMessage('A senha deve ter no minimo 6 digitos')
        }else if(password){
            setError(false);
            setErrorMessage('');
            setOpen(true);
        }
    }, [password]);


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Stack>  
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Usuário logado com sucesso!..Aguarde..
        </Alert>
      </Snackbar>
      </Stack>
            {/*<button onClick={()=>setContador(contador+1)}>Mudando o Contador</button>
            Contador vale {contador}*/}
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
                        {error && <Typography color="error">{errorMessage}</Typography>}

                        </Box>
                </Box>

            <Copyright site="avanade"/>

            </Container>
        </ThemeProvider>
    )
}
