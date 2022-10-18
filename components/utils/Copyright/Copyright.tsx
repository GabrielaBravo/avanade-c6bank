import React from 'react'
import { Typography } from '@mui/material';
import Link from 'next/link';


type CopyProps = {
  site: String;
}
export default function Copyright (props: CopyProps) {
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

