import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log('text');
    }, [language, text]);
    
    return <div />;
}

export default Convert;