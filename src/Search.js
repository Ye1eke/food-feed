import  './Search.css';
// import BookPage from './Book';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
// Import the functions you need from the SDKs you need

import Card from './Card'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AAAAl4IZk2Y:APA91bGZbjxXhvkHETcCyRnf1T1DvIZZwzA0ZELmq-49tZOj41GV-fc2W7QdK-PKF3D2MJDpKe6yVNtPu75v0LeBebtz0Adr1dhZEARK6OCJG4vPbPJS-PCElb8FjC9HuOMSk7owU18k",
  authDomain: "food-feed-4a23c.firebaseapp.com",
  databaseURL: "https://food-feed-4a23c-default-rtdb.firebaseio.com/",
  projectId: "food-feed-4a23c",
  storageBucket: "food-feed-4a23c.appspot.com",
  messagingSenderId: "650722775910",
  appId: "1:650722775910:web:8bef32a23f3624c2256ea7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase();




function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    }
    return (
      <div className='search'>
       <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
       <h2>
         Number of guests
         <PeopleIcon />
       </h2>

       <input min = {0}
       defaultValue={2}
       type="number" />
       <Button onClick={() => {window.location.href="/Search"}}> Crash at a Place</Button>
      </div>
  )
}

export default Search