import {Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    about: {
        backgroundImage: "url(images/bg2.jpg)",
        height: '600px',
         padding: "50px",
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
    },
    center: {
        color: 'white',
        width: '40%',
        border: "1px solid white",
        padding: "20px",
        [theme.breakpoints.down('sm')]: {
           width: '70%',
           display: 'block',
        },
    }
}))


export default function About() {
    const classes = useStyles();
    return (
        <Typography className={classes.about}>
            <div align= "center" justifyItems= "center">
                <div className={classes.center}>
                    <h2>About me</h2>
                    <p>I am Lolife Cabrera, the 8th child among my eight siblings in our family. I was born and raised in the province of Surigao del sur. I graduated Bachelor of Secondary education major in Mathematics in the year 2018 in Caloocan. After graduated, I worked as a Customer Service Representative. In my second BPO company, I stayed 2 years and decided to go back home in our province. With my known interest in programming, I pursue a coding bootcamp to serve that interest. What I have now are dedication and hopes to what lies ahead in my coding journey.+</p>
                </div>
            </div>
        </Typography>
    );
}
