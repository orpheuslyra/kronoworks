import {makeStyles, Theme} from '@material-ui/core/styles'
import {Typography, Box, Button, ThemeProvider, Container, Grid} from '@material-ui/core'
import { sortAndDeduplicateDiagnostics } from 'typescript'
import Image from 'next/image'


const useStyles = makeStyles((theme:Theme)=>({
    typography:{

    },
    grid:{
        padding:10,
    },
    linkButton:{
        marginTop:theme.spacing(2),
        textTransform:'none',
        border:'transparent 1px solid',
        borderRadius:50,
        backgroundColor:'#4F9DF7',
        color:'#fff',
        '&:hover':{
            backgroundColor:'#fff',
            color:'#4F9DF7'
        }
    }
}))

interface IntroductionsProps{
    index:number,
    title:string,
    description:string,
    action:string,
    href:string,
    image:string,
}

const Introductions = ({index, title, description, action, href, image}:IntroductionsProps) =>{
    const classes = useStyles()

    return(
        <Grid container>
            <Grid item xs={7}  className={classes.grid}>
            <Typography variant='h1' gutterBottom align='left'>
                {title}
            </Typography>
            <Typography variant='body1' align='left' paragraph>
                {description}
            </Typography>
            <Box textAlign='left'>
            <Button variant='outlined' color='primary' className={classes.linkButton} href={href}>
                {action}
            </Button>
            </Box>
            </Grid>
            <Grid item xs={5} className={classes.grid}>
            <img src={image} style={{height:'auto',width:'100%'}}/>
            </Grid>
        </Grid>
    )
}

export default Introductions