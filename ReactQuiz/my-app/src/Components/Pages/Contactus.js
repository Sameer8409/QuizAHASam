import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';
import FirstHeader from '../../Components/Include/FirstHeader.js';
import Footer from '../../Components/Include/Footer.js';
export default class Contactus extends Component{
render(){
	return(
            <div className="contactus">
                <FirstHeader/>
                <div className="default-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                        <h2>Demo Content for Contect Us</h2>
                        <p> Q1. How to Play?</p>
                        <p> A. When you have a great story about how your product or service was built to change lives,
                         share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand,
                          providing context and meaning for your product. What’s more, good stories are sticky 
                          -- which means people are more likely to connect with them and pass them on.</p>

                          <p> Q2. How many quizes can I Play?</p>
                            <p>Yellow Leaf Hammocks tells users about its product by describing how the hammocks empower artisan 
                            weavers and their families. The company breaks down different pieces of the story into sections that
                             combine words and easily digestible graphics, painting a picture instead of big chunks of text. They're 
                             clear about why they're different: "Not a Charity," the page reads. And then: "This is the basis for a brighter future,
                              built on a hand up, not a handout."</p>
                            <h4> Still have a query!</h4>
                            <p>Contact Us at:</p>
                            <p>contact No. 987XXXXX32</p>
                            <p>Email at <Link to="gmail.com">quizAha.help@quizaha.in</Link></p>
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        );
	}
}
