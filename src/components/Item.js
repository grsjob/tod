import React from 'react';

const Item = ({title,remove,id}) => {
    return (
        <li>
            {title}
            <button onClick={()=>remove(id)}>X</button>
        </li>
    );
};

export default Item;