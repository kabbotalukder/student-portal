import React from 'react';
import './Accordion.css';

const AccordionItem = ({ item, i, selected, toggle }) => {
    return(
        <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
                <h3>{item.semester}</h3>
                <span>{selected === i ? '-' : '+'}</span>
            </div>
            {item.subjects.map((sub) => (
                <div className={selected === i ? 'content show' : 'content'}>
                    {sub}
                </div>
            ))}
        </div>
    );
}

export default AccordionItem;