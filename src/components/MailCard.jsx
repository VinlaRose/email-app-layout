import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"





export const MailCard = ({id, sender, subject, message, read, noBtn}) => {
    const {redBtnHandler} = useContext(MailContext);
    return(
        <div>
            <li key={id}>
                            {subject}
                            {noBtn && <>
                                {read === false && 
                            <button onClick={() => redBtnHandler(id)}>Mark as read</button>}
                            </>}


                            {/* {read === false && 
                            <button onClick={() => redBtnHandler(id)}>Mark as read</button>} */}
                        </li>
        </div>
    )
}