import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import {Container, Grid, Typography} from '@material-ui/core'
import Features from '../components/service/Features'
import PageTemplate from '../components/layouts/PageTemplate'
import theme from '../components/utils/theme'
import {GetStaticProps, GetStaticPaths} from 'next'

const useStyles = makeStyles(()=>({
    container:{
        marginTop:'3rem'
    }
}))

interface Feature {
    title:string
    subTitle:string
    image:string
    description:string
}

const Service:React.FC=()=>{
    const classes = useStyles()

    const features:Feature[]=[
        {
            title:'SKY STUDIO',
            subTitle:'ドローン空撮事業の紹介',
            image:'/images/service/SkyStudio.jpeg',
            description:'ドローンを使用したみたことのない視点での映像をご提供します'
        },
        {
            title:'MOVIE STUDIO',
            subTitle:'動画制作事業の紹介',
            image:'/images/service/MovieStudio.jpeg',
            description:'アクションカメラや360°カメラを使用してオリジナリティあふれる動画を撮影します'
        },
        {
            title:'WEB STUDIO',
            subTitle:'Web制作事業の紹介',
            image:'/images/service/WebStudio.jpeg',
            description:'オリジナリティあふれる画像や映像を使用して新しい価値を提供します'
        }
    ]

    return(
        <>
        <ThemeProvider theme={theme}>
            <PageTemplate title='Service | Corporate Site Sample'>
                <>
                <Container maxWidth='lg' className={classes.container}>
                    <Grid container justifyContent='center'>
                        <Grid item>
                            <Typography variant='h1' gutterBottom>
                                Service
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth='lg' className={classes.container}>
                    <Grid container spacing={3} justifyContent='center'>
                        {features.map((feature,index)=>(
                            <Features key={index}
                                title={feature.title}
                                subTitle={feature.subTitle}
                                image={feature.image}
                                description={feature.description}
                                />
                        ))}
                    </Grid>
                </Container>
                </>
            </PageTemplate>
        </ThemeProvider>
        </>
    )
}
export default Service

