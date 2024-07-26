import { CirclePlus } from 'lucide-react';
import { CircleMinus } from 'lucide-react';
import { Zoom } from 'react-awesome-reveal';
import './FAQ.css';

const FAQ = ({ question, answer, id, setSelectedID, selectedID }) => {
    console.log(selectedID)

    return (
        <>
            <Zoom duration={4000} direction='top'>
                <div className='FaqSec'>
                    <h3 className='questiontext'>{question}</h3>
                    {
                        selectedID === id ?
                            <p className='clicktext' onClick={() => setSelectedID('')}><CircleMinus /></p> :
                            <p className='clicktext' onClick={() => setSelectedID(id)}><CirclePlus /></p>
                    }
                </div>
                <div>
                    {
                        selectedID === id && <p className='answertext'>{answer}</p>
                    }
                </div>
            </Zoom>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;