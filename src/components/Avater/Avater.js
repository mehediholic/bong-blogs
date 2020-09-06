import React, { useState, useEffect } from 'react';

const Avater = () => {
    const [avater , setAvater]= useState('');
    useEffect(() => {
   fetch('https://randomuser.me/api/')
   .then(res => res.json())
   .then(data => setAvater(data.results[0].picture.large))
    },[])
    return (
        <div>
            <img  src={avater} alt=""/>
        </div>
    );
};

export default Avater;