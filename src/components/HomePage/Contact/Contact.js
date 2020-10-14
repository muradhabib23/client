import React from 'react';

const Contact = () => {
    return (
        <section style={{backgroundColor:'#FBD062', height:'700px'}} className="pb-0 pb-md-5 my-5">
            <div className="container mb-5" style={{paddingTop:'50px'}}>
                <div className="row mb-5">
                    <div className="col-md-6 mb-4 m-md-0">
                        <h3 style={{color: '#111430'}}><strong>Let us handle your<br/>project, professionally.</strong></h3>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium eveniet quas architecto consectetur velit!</p>
                    </div>
                    <div className="col-md-6 align-self-center">
                    <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Name/Comany's Name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                       </div>
                       <div className="form-group">
                           <button className="text-white" type="button" style={{width:'170px', height: '45px', backgroundColor:'#111430', borderRadius: '5px'}}> Submit </button>
                       </div>
                   </form>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </section>
    );
};

export default Contact;