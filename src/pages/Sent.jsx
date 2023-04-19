import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"
import { MailCard } from "../components/MailCard";

export const Sent = () => {
    const {sentMails} = useContext(MailContext);
    
    
    
    return(
        <div>
            <h1>Sent Mails</h1>
            
            <ul>
                {
                    sentMails.map((item, noBtn) => (
                        <MailCard {...item} noBtn={false} />
                    ))
                }
            </ul>
        </div>
    )
}