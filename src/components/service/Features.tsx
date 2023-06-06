import {Typography} from '@material-ui/core'
import {makeStyles, Grid, Card, CardHeader, Box} from '@material-ui/core'
import Image from 'next/image'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { CallMissedSharp } from '@material-ui/icons'

const useStyle = makeStyles(()=>({
    imageContainer:{
        position:'relative',
        width:'100%',
        height:'250px',
        margin:'5px 0 5px 0',
    },
    card:{
        height:'',
        width:'300px',
        marginBottom:'0.5em',
        transition:'all 0.3s',
        '&:hover':{
            boxShadow:
            "1px 0px 20px -1px rgba(0,0,0,0.2), 0px 0px 20px 5px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            transform:'translateY(-3px)'
        },
        cursor:'pointer',
        padding:'10px',
        
    },
    cardHeader:{
        padding:'1rem 1rem 0.5rem'
    }
}))

interface FeaturesProps {
    title:string,
    subTitle:string,
    image:string,
    description:string,
}

const Features = ({title, subTitle, image, description}:FeaturesProps) => {
    const classes = useStyle()
    return (
        <>
        <Grid item>
            <Card className={classes.card}>
                <Typography variant='h3'>{title}</Typography>
                <div>{subTitle}</div>
                <div className={classes.imageContainer}>
                <Image src={image} alt='feature' fill/>   
               </div>
                <div>{description}</div>
            </Card>
        </Grid>
        </>
    )
}

export default Features