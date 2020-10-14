import React from 'react';
import Feedback from '../Feedback/Feedback';
import customerOne from '../../../images/customer-1.png';
import customerTwo from '../../../images/customer-2.png';
import customerThree from '../../../images/customer-3.png'


const feedbackData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat',
        name : 'Wilson Harry',
        from : 'California',
        img : customerOne
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat',
        name : 'Ema Gomez',
        from : 'New York',
        img : customerTwo
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat',
        name : 'Aliza Farari',
        from : 'Michigan',
        img : customerThree
    }
]
const Feedbacks = () => {
    
    return (
       <section style={{marginBottom:'250px'}}>
        <div style={{marginTop:'100px', marginBottom:'120px'}}>
            <h1 className='text-center'style={{fontWeight: '600px'}}>Clients <span style={{color:'#7AB259'}}>Feedback</span></h1>
        </div>
        <div style={{marginLeft:'25px', marginRight:'25px'}}>
               <div className="card-deck mt-5 ml-5 mr-5">
                    {
                        feedbackData.map(feedback => <Feedback feedback={feedback} key={feedback.name}/>)
                    }
                </div>
       </div>
       </section>
    );
};

export default Feedbacks;