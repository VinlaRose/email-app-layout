import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"
import { MailCard } from "../components/MailCard";

export const Inbox = () => {
    const {mailItems} = useContext(MailContext);
    const {read} = useContext(MailContext);
    const {unread} = useContext(MailContext);
    const {redBtnHandler} = useContext(MailContext);

    console.log(mailItems)
    return(
        <div>
            <h1>Inbox </h1>
            <h3>Read: {read}</h3>
            <h3>Unread: {unread}</h3>
            <ul>
                {
                    mailItems.map((item, noBtn) => (
                        <MailCard {...item} noBtn={true} />
                    ))
                }
            </ul>
        </div>
    )
}