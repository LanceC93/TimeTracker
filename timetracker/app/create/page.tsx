"use client";

import "../global.css";
import {getServerSession} from 'next-auth';
import {redirect} from 'next/navigation';
import React, {useState} from 'react';

export default async function create() {
    const handleSubmit = async (event) => {
        event.preventDefault(); 
    
        const formData = new FormData(event.target); 
    
        try {
          let response = await fetch('http://localhost:3000/api/submit', {
            method: 'POST',
            body: formData,
          });
          response = await response.json();
        } catch (error) {
          // Handle error
          console.error('Error submitting form:', error);
        }
    };

    const session = await getServerSession();

    if(!session || !session.user) {
        redirect("/api/auth/signin");
    }

    
    return(
        <div className="new-time">
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input type="text" name="title" required></input><br/>
                <label>Start Time</label>
                <input type="time" name="startTime" required></input>
                <label>Stop Time</label>
                <input type="time" name="stopTime" required></input><br/>
                <input type="submit" value={"Submit"}></input>
            </form>
        </div>
    );
}