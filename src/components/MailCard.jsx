import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"
import { Link } from "react-router-dom";





export const MailCard = ({id, sender, subject, message, read, noBtn}) => {
    const {redBtnHandler} = useContext(MailContext);
    return(
        <div key={id}>
            <Link to={`/details/${id}`} >
                            {subject}
                            


                            {/* {read === false && 
                            <button onClick={() => redBtnHandler(id)}>Mark as read</button>} */}
                        </Link>
                        {noBtn && <>
                                {read === false && 
                            <button onClick={() => redBtnHandler(id)}>Mark as read</button>}
                            </>}
        </div>
    )
}