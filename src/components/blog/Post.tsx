import {makeStyles} from '@material-ui/core/styles'
import {Container, Grid, Typography} from '@material-ui/core'

import ShareButton from '../utils/ShareButton'
import moment from 'moment'


const useStyles = makeStyles(()=>({
    container: {
        marginTop:'3rem',
        maxWidth:'800px',
        overflow:'hidden'
    }
}))

interface PostsProps{
    id:string
    title:string
    publishedAt:string
    eyecatch:string
    content:HTMLElement
}

const Post = ({id, title, publishedAt, eyecatch, content}:PostsProps) =>{
    const classes = useStyles()

    return (
        <>
        <Container className={classes.container} >
            <Grid container direction='column' spacing={3}>
                <Grid item>
                    <Typography variant='h1'>{title}</Typography>
                </Grid>
                <Grid item>
                    <Typography color='textSecondary'>
                        {moment(publishedAt).format('YYYY-MM-DD')}
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={eyecatch} style={{height:'auto',width:'100%'}}/>
                </Grid>
            </Grid>
        </Container>
        <Container className={classes.container}>
            <Grid container direction='column' alignItems='center'>
                <Grid item>
                    <ShareButton 
                        url={`https://www.yahoo.co.jp`}
                    />
                </Grid>
            </Grid>
        </Container>
        <Container className={classes.container}>
            <Grid container direction='column' alignItems='center'>
                <Grid item>
                    <div dangerouslySetInnerHTML={{
                        __html:`${content}`
                    }}/>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
export default Post