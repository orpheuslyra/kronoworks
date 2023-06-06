import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Button, Paper, Box, Typography} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(()=>({
    slider:{
        width: '100%',
    },
    media:{
        position:'relative',
        height:'600px',
        overflow:'hidden',
        padding:'20px',
        color:'white',
    },
    checkButton:{
        maginTop:'40px',
        color:'#fff',
        fontSize:'25px',
        textTransform:'capitalize'
    }
}))

interface ItemProps{
    name:string
    description:string
    color:string
    image:string
}

const Item = ({name, description, color, image}:ItemProps)=>{
    const classes = useStyles()
    return (
        <>
        <Paper
            className={classes.media}
            elevation={10}
            square
        >
        </Paper>
        </>
    )
}

const Slider = ({items}) =>{
    const classes = useStyles()

    return (
        <Carousel
            className={classes.slider}
            autoPlay={items.length > 1 ? true:false}
            animation='fade'
            duration={1000}
            interval={8000}
            navButtonsAlwaysInvisible={items.length == 1 ? true : false}
            indicators={false}
        >
            {
                items.map((item,index) =>(
                    <Item
                    key={index}
                    name={item.name}
                    description={item.description}
                    color={item.color}
                    image={item.image}
                    />
                    ))
            }
        </Carousel>
    )
}

export default Slider