import {makeStyles,ThemeProvider} from '@material-ui/core/styles'
import {Container, Grid, Typography} from '@material-ui/core'
import {GetStaticProps, NextPage} from 'next'

import Slider from '../components/home/Slider'
import Introductions from '../components/home/Introductions'
import Features from '../components/service/Features'
import PageTemplate from '../components/layouts/PageTemplate'
import theme from '../components/utils/theme'
import Posts from '../components/blog/Posts'
import { fetchLatestPosts } from '../lib/api'
import MainVisual from '../components/home/MainVisual'


const useStyles = makeStyles(() =>({
  container:{
    marginTop:'3rem'
  }
}))

interface Item{
  name:string
  description:string
  color:string
  image:string
}

interface Introduction{
  title:string
  description:string
  action: string
  href:string
  image:string
}

interface Post{
  id:string
  title:string
  subTitle:string
  eyecatch:{
    url:string
  }
}


export const getStaticProps:GetStaticProps = async() =>{
  const latestPosts = await fetchLatestPosts(3)
  return {
    props:{latestPosts},
    revalidate:1
  }
}


const Home = ({latestPosts}) => {
  const classes = useStyles()

  const items: Item[]=[
    {
      name: "Drone",
      description: "Exploring in the sky with drone",
      color: "#64ACC8",
      image:'/images/index/SkyStudio.jpeg',
    },
    {
      name: "Movie",
      description: "どうがつくっちゃお",
      color: "#7D85B1",
      image:'/images/index/MovieStudio.jpeg',
    },
    {
      name: "Web",
      description: "webアプリ開発",
      color: "#CE7E78",
      image:'/images/index/WebStudio.jpeg',
    }
  ]

  const introductions: Introduction[] = [
    {
      title: "新しい視点に立ち新しい価値を提供する",
      description: '私たちは新たな価値を作り出すことで人々を幸福で満たせることを目指して活動しています。',
      action: "About >",
      href: "/company",
      image:'/images/index/26246584_s.jpg',
    },
    {
      title: "空からお届けするサービス",
      description: "ドローンを使った新しい視点から空撮写真、データ解析、動画制作、Web制作を行うサービスを提供しています。",
      action: "Service >",
      href: "/service",
      image:'/images/index/22972815_s.jpg',
    },
    {
      title: "Contact",
      description: "お問い合わせはこちらまで",
      action: "Contact >",
      href: "/recruit",
      image:'',
    },
  ]

  return (
    <>
    <ThemeProvider theme={theme}>
      <PageTemplate title='Home | corporate site'>
    <>
    <MainVisual/>
      {introductions.map((introduction, index)=>(
        <Container key={index} maxWidth='md' className={classes.container}>
        <Grid container spacing={1} justifyContent='center'>
        <Introductions
          index={index}
          title={introduction.title}
          description={introduction.description}
          action={introduction.action}
          href={introduction.href}
          image={introduction.image}
        />
        </Grid>
        </Container>
      ))}
      <Container maxWidth='lg' className={classes.container} >
        <Typography variant='h1' align='center' style={{marginBottom:"2rem"}}>
          Topics
        </Typography>
        <Grid container spacing={4} >
          {latestPosts?.map((post:Post)=>(
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Grid container>
                <Posts
                  id={post.id}
                  title={post.title}
                  subTitle={post.subTitle}
                  eyecatch={post.eyecatch.url}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      </>
      </PageTemplate>
      </ThemeProvider>
    </>
  )
}

export default Home