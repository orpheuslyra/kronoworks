import React, {useRef, useEffect} from 'react'
import {Box} from '@material-ui/core'
import { makeStyles,Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme)=>({mainVisualBox:{width:'100%',height:'800px'}}));


function MainVisual(){
    const classes = useStyles()
    const videoRef=useRef<HTMLVideoElement>(null);
    useEffect(()=>{
        videoRef.current?.play();
    },[]);

    return(
        <Box className={classes.mainVisualBox}>
        <React.StrictMode>
            <video loop muted ref={videoRef} height='100%'>
                <source src='/images/video/fantasy.mp4' type='video/mp4'></source>
            </video>
        </React.StrictMode>
        </Box>
    )
}
export default MainVisual