import React, {useState,useEffect} from 'react'
import  FirebaseApp  from '../firebaseConfig'
import { auth } from '../firebaseConfig'
import { collection,push, addDoc,getDoc,setDoc,doc,docs,getDocs,deleteDoc,updateDoc,Timestamp,query } from 'firebase/firestore'
import { getFirestore, onSnapshot } from 'firebase/firestore'
import Router from 'next/router'
import { async } from '@firebase/util'
const db=getFirestore();



const FeedbackList=()=> {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
      
        // get all data from firebase

        const getAllDocument=async()=>{
            onSnapshot(collection(db,"UnniversaryFeedback"),(snapshot)=>{
                console.log("Feedback Data",snapshot);
                setFeedbackData(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
            });


        }
        getAllDocument();
    
      
    }, [])
    

  return (
    
    <section className='c-feedbacklist box'>
    <table className='table-class'>
                      <thead>
                          <tr >

                            <th>Sr.No</th> 
                              <th>Partner Name</th>                                
                              <th>PhoneNumber</th> 
                              <th>Connect Partner</th>                                 
                              <th>Experience</th>
                              <th>Suggestion</th>
                              <th>New Version</th>
                           
                          </tr>
                      </thead>

                      <tbody>

                        {/* // map the function */}
                        {
                        feedbackData && feedbackData.map((feedback, key=i) => {
                            console.log("feedback all data", feedback);
                            return (

                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                           <td>{feedback.Name}</td>
                                           <td>{feedback.PhoneNumber}</td>
                                           <td>{feedback.ConnectLP}</td>
                                           <td>{feedback.Experience}</td>
                                           <td>{feedback.Suggestion}</td>
                                           <td>{feedback.newVersion}</td>
                                            
                                        </tr>                           
                            )

                        })
                    }

                    </tbody>

      </table>
    </section>
 
  )
}

export default FeedbackList