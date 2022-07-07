import * as React from 'react'
import Box from '@mui/material/Box'
// import { pink } from '@mui/material/colors'
import SvgIcon from '@mui/material/SvgIcon'

function HomeIcon(props, className) {
  return (
    <SvgIcon {...props} className={props.className}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

export default function SvgIconsColor(props, className) {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2
        }
      }}
    >
      <HomeIcon {...props} className={`${props.className}`} />
      {/* <HomeIcon color="primary" /> */}
      {/* <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} /> */}
    </Box>
  )
}
