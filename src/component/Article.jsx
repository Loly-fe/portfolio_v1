import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
// import from '@material-ui/icons/thumb';

const Article = ({page, image, title, content}) => {

    const [count, setCount] = useState(24);
 
    return (
        <div class="article"> 
            <Link to={page}><img width= "70%" height= "calc(100vw/2)" src={image} alt=""/></Link>
            <div style={{width: "70%"}}>
            <Link to={page}><h2>{title}</h2></Link>
            <div style={{display: "flex", align: "center", justifyItems: "center"}}>
                <p>{count}</p>
                <p style={{display: 'inline-block'}} onClick={()=>setCount(count+1)}><pre>👍</pre></p>
            </div>
            
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Article
