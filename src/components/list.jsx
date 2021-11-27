import React from 'react';

const List = (props) => {
    return (
        <>
            <li type={props.type?props.type:"square"}>{props.name}</li>
        </>
    );
}

export default List;
