import { useParams } from "react-router-dom";

import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"


export const DetailedMail = () => {
    const {mailId} = useParams()
    const {mailItems} = useContext(MailContext)
    const {sentMails} = useContext(MailContext)
  

    const findMail = mailItems.find((item) => item.id === Number(mailId));
    const findSentMail = sentMails.find((item) => item.id === Number(mailId));

    console.log(findMail);
    console.log(findSentMail);
    

    
    return(
        <div>
            <h1>Details</h1>
            {
                findMail === undefined ? 
                <div>
                    <p>To: {findSentMail.to}</p>
                    <p>Subject: {findSentMail.subject}</p>
                    <p>Message: {findSentMail.message}</p>
                
                </div>
                 : 
                <div>
                    <p>From: {findMail.sender}</p>
                    <p>Subject: {findMail.subject}</p>
                    <p>Message: {findMail.message}</p>
                </div>
            }
          
            

        </div>
    )
}