import {Typography, makeStyles} from "@material-ui/core";

export default function Home() {
    return (
        <Typography style={{ backgroundImage: "url(images/pexels.jpeg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: '600px', padding: "50px" }}>
            <div align= "center" justifyItems= "center" style={{color: "white", marginLeft: "20px"}}>
                <div><img src="images/life.jpg" alt="life" width= "200" height= "200"/></div>
                <div style={{fontSize: "20px"}}>
                    <strong>Hello, my name is Lolife.</strong>
                </div>
                <div style={{backgroundColor: "", width: "25%", border: "1px solid #89B5AF", borderRadius: "5px", padding: "5px"}}>
                    <p>I am new in Web Development.</p>
                    <p>My areas of interest include problem-solving and improving things, with the joy of learning more in the process.</p>
                </div>
            </div>
        </Typography>
    );
}
