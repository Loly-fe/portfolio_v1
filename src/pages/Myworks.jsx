import {Typography, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    body: {
        position: "absolute",
        backgroundColor: "#89B5AF",
        color: "white",
    },
    cover1: {
        margin: 0,
        display: 'flex',
    },
    cover2: {
        backgroundColor: '#D3E4CD',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '120%',
    },
    center: {
        align: "center",
        textAlign: 'center',
        justifyItems: "center",
    },
    img: {
        width: '350px',
        marginTop: '0px',
        position: 'relative',
        '&:hover' : {
            transform: 'scale(1.2)',
        },
    },
    // img: {
    //     width: '550px',
    //     marginTop: '0px',
    //     position: 'relative',
    // },
    img2: {
        width: '300px',
        marginTop: '0px',
        position: 'relative',
    }
}))
  
export default function Myworks() {
    
    const classes = useStyles();
    return (
        <Typography marginTop= "0px" className={classes.body}>
            <h2 style={{padding: '10px', textDecorationLine: 'underline'}} >My Works</h2><br/>
            <div className={classes.center}>
                <div>
                    <img className={classes.img} src="images/coding15.png" alt="" /><br/>
                    <img className={classes.img} src="images/coding15b.png" alt="" />
                    <h4>Online Magazine</h4>
                    <pre>Mini project</pre><br/>
                </div>
                <div style={{backgroundColor: "#ADC2A9", padding: "50px"}}>
                    <img className={classes.img2} src="images/coding16.png" alt="" />
                    <h4>e-calculator</h4>
                    <pre>Sample activity</pre>
                </div>
            </div>
            <div className={classes.cover2}>
                <h2 className={classes.center}><br/>My coding journey</h2><br/><br/>
                <div className={classes.center}>
                    <img className={classes.img} src="images/coding1.png" alt="" />
                    <img className={classes.img} src="images/coding2.png" alt="" />
                    <img className={classes.img} src="images/coding5.png" alt="" />
                    <img className={classes.img} src="images/coding7.png" alt="" />
                    <img className={classes.img} src="images/coding9.png" alt="" />
                    <img className={classes.img} src="images/coding10.png" alt="" />
                    <img className={classes.img} src="images/coding11.png" alt="" />
                    <img className={classes.img} src="images/coding12.png" alt="" />
                    <img className={classes.img} src="images/coding13.png" alt="" />
                    <img className={classes.img} src="images/coding4.png" alt="" />
                    <img className={classes.img} src="images/coding6.png" alt="" />
                    <img className={classes.img} src="images/coding8.png" alt="" />
                </div>
                <div style={{height: '50px'}}></div>
            </div>
        </Typography>
    );
}
