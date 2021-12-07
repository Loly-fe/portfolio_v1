import {Typography, makeStyles} from "@material-ui/core";
import React, {useRef, useState, useEffect} from 'react';


export default function Contact() {

    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [id, setID] = useState(Date.now);
    const [allContacts, setallContacts] = useState([]);
    
    const handlesubmit=(event)=> {
        event.preventDefault();
        let obj = {
            id: id,
            fname:fnameRef.current.value,
            lname:lnameRef.current.value,
            email:emailRef.current.value,
            message:messageRef.current.value,
        };
        setallContacts ([...allContacts, obj]);
        alert(JSON.stringify(obj));
        fnameRef.current.value = null
        lnameRef.current.value = null
        emailRef.current.value = null
        messageRef.current.value = null
        setID(Date.now);
      }
      useEffect(()=>{localStorage.setItem("contactus", JSON.stringify(allContacts))},[allContacts]);

    //   export class CommentList extends React.Component {
    //       constructor() {
    //           let comments = JSON.parse(localStorage.getItem('data'))
    //           this.state = {
    //               comments: comments
    //           };
    //       }
    //       render() {
    //           return (
    //               ...
    //           );
    //       }
    //   }

    //   const [contactus, setcontactus] = useState(()=> {
    //       const messages = localStorage.getItem("contactus");
    //       const initialValue = JSON.parse(messages);
    //     return initialValue || "";
    //     });

    return (
        <Typography style={{backgroundColor: "#89B5AF", color: "white", height: '600px', padding: "50px"}}>
            <div><h2>Send me a message</h2></div><br/>
            <form action="" onSubmit={handlesubmit}>
                <div align= "center" justifyItems="center" style={{backgroundColor: "", width: "50%", border: "1px solid white", borderRadius: "5px", padding: "20px"}}>
                    <label htmlFor="fname" backgroundColor= '#D0CAB2'>Fullname Name or Company Name: </label>
                    <input width= "100%" id="fname" name="fname" ref={fnameRef} type="textarea" required/><br/>
                    <label htmlFor="email" cols="56">Email: </label>
                    <input id="email" name="fname" style={{width:'383px'}} ref={emailRef} type="email" name="" id="" required/><br/>
                    <label htmlFor="message">Message</label><br/>
                    <textarea name="message" ref={messageRef} id="message" cols="56" rows="3" placeholder="your message here..." required></textarea><br/>
                    <button type="submit">Send Message</button><br/>
                </div>
                
            </form>

            {/* {initialValue}; */}

        </Typography>
    );
}
