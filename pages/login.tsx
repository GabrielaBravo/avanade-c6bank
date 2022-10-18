import React, { FormEvent, useEffect, useState } from 'react'
import {Typography, 
    Container, 
    Button, 
    TextField, 
    Checkbox, 
    Box, 
    CssBaseline, 
    FormControlLabel,
    } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '../components/utils/SnackBar';
import Copyright from '../components/utils/Copyright';



  
  
//@mui/material

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
              {/* <Snackbar open={open} duration={6} message={'Usuário logado com sucesso! ...Aguarde...'}>*/}


                
            { /*<button onClick={()=>setContador(contador+1)}>Mudando o Contador</button>
              Contador vale {contador}*/}
               

            <Copyright site="avanade"/>
            {open && <Snackbar open={open} hide={5} message={'Usuário logado com sucesso!...Aguarde...'} severity="success" />}
            </Container>
        </ThemeProvider>
    )
}
