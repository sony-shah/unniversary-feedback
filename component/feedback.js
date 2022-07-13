import React, { useEffect, useState } from 'react'
import { collection, addDoc, setDoc, doc, docs, getDocs, getDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import firebaseApp from '../firebaseConfig';
import { getFirestore, onSnapshot } from "firebase/firestore";

const db = getFirestore();

const Feedback=()=> {
    const [Name, setName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Experience, setExperience] = useState('');
    const [Suggestion, setSuggestion] = useState('');
    const [Like, setLike] = useState('');
    const [newVersion, setnewVersion] = useState('');
    const [ConnectLP, setConnectLP] = useState('');

    const usersCollectionRef = collection(db, "UnniversaryFeedback");


    const handleSubmitFeedback=async()=>{
      event.preventDefault();

      const data = {
        Name:Name,
        PhoneNumber:PhoneNumber,
        Experience:Experience,
        Like:Like,
        Suggestion:Suggestion,
        newVersion:newVersion,
        ConnectLP:ConnectLP,
        createdAt: serverTimestamp(),
    
      };

      alert("feedback submitted successfully")
      // const newCityRef = doc(collection(db, "UnniversaryFeedback"));
      // await setDoc(newCityRef, data); 
      const docRef = await addDoc(collection(db, "UnniversaryFeedback" ),data )
      // console.log("feedback data", docRef);
      console.log("feedback data", data);


      setName("");
      setPhoneNumber("");
      setConnectLP("");
      setExperience("");
      setLike("");
      setSuggestion("");
      setnewVersion("");


    
    }


  return (

  <>
    <div>
      <div className="logo">
        <a
          href="https://www.ujustbe.com/"
          target="_blank"
          rel="noopener noreferrer">

          <img src="/logo.png" alt="ujustbe Logo" />
        </a>
      </div>


    <form onSubmit={handleSubmitFeedback}>
          

          {/* 1st question */}
          <div className=" form-row radio-buttons">

            <h2>1. Please enter your name</h2>
            <ul>
              <li>
              <input type="text" 
                        value={Name}
                        name="name"
                        required
                        onChange={( event ) => {
                        setName(event.target.value)}} />
            </li>
             
            </ul>

          </div>

           {/* 2nd question */}

           <div className=" form-row radio-buttons">

                <h2>2. Enter your Mobile Number </h2>
                  <ul>
                    <li>
                      <input type="text" 
                            value={PhoneNumber}
                            required
                            name="phonenumber"
                            onChange={( event ) => {
                            setPhoneNumber(event.target.value)}} />
                    </li>

                  </ul>

            </div>



             {/* 3rd question */}
           <div className=" form-row radio-buttons">

                <h2>3. How was your experience in unniversary ?</h2>
                  <ul>
                    <li>
                      <input type="text" 
                            value={Experience}
                            required
                            name="experience"
                            onChange={( event ) => {
                            setExperience(event.target.value)}} />
                    </li>

                  </ul>

            </div>


            {/* 4th question */}
            <div className=" form-row radio-buttons">

              <h2>4. What did you like or remember about unniversary ?</h2>
                <ul>
                  <li>
                    <input type="text" 
                          value={Like}
                          required
                          name="likeremember"
                          onChange={( event ) => {
                          setLike(event.target.value)}} />
                  </li>

                </ul>

          </div>



            { /* 5th question */}
          <div className=" form-row radio-buttons">

              <h2>5. What do you know about the new UJustBe Universe ?</h2>
                <ul>
                  <li>
                    <input type="text" 
                          value={newVersion}
                          required
                          name="newversion"
                          onChange={( event ) => {
                          setnewVersion(event.target.value)}} />
                  </li>

                </ul>

          </div>

            {/* 6th question */}
            <div className=" form-row radio-buttons">

              <h2>6. Have you connected with any Partner or Listed Partner after Unniversary ?</h2>
                <ul>
                  <li>
                    <input type="text" 
                          value={ConnectLP}
                          required
                          name="connectlp"
                          onChange={( event ) => {
                          setConnectLP(event.target.value)}} />
                  </li>

                </ul>

              </div>

          {/* 7th question */}
          <div className=" form-row radio-buttons">

            <h2>7. Please share you suggestions with us.</h2>
              <ul>
                <li>
                  <input type="text" 
                        value={Suggestion}
                        required
                        name="suggestion"
                        onChange={( event ) => {
                        setSuggestion(event.target.value)}} />
                </li>

              </ul>

          </div>

          <div>
            <button
            
              type="submit"
              >Submit
            </button>
          </div>

        </form>
      
      
    </div>

        


  </>
  
  );
 
}

export default Feedback
