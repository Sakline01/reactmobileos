import React from 'react';
import List from './list';
const Company = () => {
    return (
        <ul>
            <List name="Samsung"/>
            <List type="circle" name="HTC"/>
            <List name="Micromax"/>
            <List type="disc" name="Aplle"/>
        </ul>
    );
}

export default Company;
