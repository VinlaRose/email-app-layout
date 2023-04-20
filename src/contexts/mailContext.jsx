import { createContext, useEffect, useState } from "react";

export const MailContext = createContext();

export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/allemails') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              emails: [
                {
                  id: 1,
                  sender: 'John Doe',
                  subject: 'Hello!',
                  message: 'How are you?',
                  read: false,
                },
                {
                  id: 2,
                  sender: 'Jane Smith',
                  subject: 'Meeting',
                  message: 'Reminder of our meeting tomorrow at 2pm.',
                  read: true,
                },
                {
                  id: 3,
                  sender: 'Bob Johnson',
                  subject: 'Proposal',
                  message:
                    "Thanks for your proposal. We'll get back to you soon.",
                  read: false,
                },
                {
                  id: 4,
                  sender: 'Juana',
                  subject: 'Follow up on previous email',
                  message:
                    'Just checking if you got time to go through my proposal.',
                  read: true,
                },
              ],
              sentEmails: [
                {
                  id: 5,
                  to: 'John Doe',
                  subject: 'Re: Hello!',
                  message: 'I am Good.',
                },
                {
                  id: 6,
                  to: 'Jane Smith',
                  subject: 'Re: Meeting',
                  message: "Thanks for the reminder. I'll be there.",
                },
                {
                  id: 7,
                  to: 'Bob Johnson',
                  subject: 'Re: Proposal',
                  message:
                    'We are still discussing in the proposal you sent.',
                },
                {
                  id: 8,
                  to: 'Juana',
                  subject: 'Re: Follow up on previous email',
                  message:
                    'We liked your proposal. Let us set up a meeting for further discussion.',
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Email list not found.',
          })
        }
      }, 2000)
    })
  }

  

export const MailProvider = ({children}) => {

    const [mailItems, setMailItems] = useState([]);
    const [sentMails, setSentMails] = useState([]);

    const getData = async() => {
        try{
            const response = await fakeFetch( 'https://example.com/api/allemails');
            if(response.status === 200){
                setMailItems(response.data.emails)
                setSentMails(response.data.sentEmails)
    
            }
        }catch(e){
            console.error(e)
        }
      }
      useEffect(() => {
        getData();
      },[])

      const read = mailItems.reduce((acc,curr) => acc + curr.read, 0)
      

      const unread = mailItems.reduce((acc,curr) => acc + (!curr.read), 0)
      

      const redBtnHandler = (id) => {
        const updatedMailItems = mailItems.map((item)=>{
          if(item.id === id){
            return {...item, read : true}
          }else{
            return item
          }
        });
        setMailItems(updatedMailItems);
      }




    return(
        <MailContext.Provider value={{mailItems, read, unread, redBtnHandler, sentMails}}>
            {children}
        </MailContext.Provider>
    )
}