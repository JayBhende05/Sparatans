import React, {useState} from 'react'
import Hero from '../components/Hero'
import emailjs from 'emailjs-com';
import toast from "react-hot-toast"


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .send(
            'service_jay', // Replace with your EmailJS service ID
            'template_5oagvg7', // Replace with your EmailJS template ID
            formData,
            '3n2NsU8q-mxKKmO8j' // Replace with your EmailJS user ID
          )
          .then(
            (result) => {
            //   alert('Email sent successfully!');
              setFormData({ name: '', email: '', message: '' });
              toast.success("Email Sent Successfully")
            },
            (error) => {
            //   alert('Failed to send email.');
              toast.error("Failed to send email.")
              console.error(error);
            }
          );
      };
  return (
    <>
    <Hero page={"Contact"}/>
    
       <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Contact</h6>
                <h1>Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form bg-white" style={{padding: "30px"}}>
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" noValidate="noValidate" style={{padding: "20px"}} onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" className="form-control p-4" id="name" placeholder="Your name"
                                        required="required" data-validation-required-message="Please enter your name" name='name' value={formData.name}
                                        onChange={handleChange} />
                                     
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                                    name='email'
                                        required="required" data-validation-required-message="Please enter your email"  value={formData.email}
                                        onChange={handleChange} />
                                    
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"  value={formData.message}
                                    name='message'
                                    onChange={handleChange}></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Contact
