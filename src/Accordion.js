import { useState } from 'react';
import AccordionItem from './AccordionItem';
import './global.css';
import './Accordion.css';
import { data } from './data';

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }

    return(
        <div className="wrapper">
            <div className='accordion'>
                {data.map((item, i) => (
                    <AccordionItem
                        key={i}
                        item={item}
                        i={i}
                        selected={selected}
                        toggle={toggle}
                    />
                ))}
            </div>
        </div>
    );
}

export default Accordion;