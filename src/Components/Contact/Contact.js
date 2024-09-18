import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div>
        <section className='contact'>
        <div className='container11'>
            <h2>
                Contact Us
            </h2>
            <div className='contact1'>
                <div className='contact-form'>
                    <h3>
                        Send us a message
                    </h3>
                    <form>
                        <div className='form-group'>
                            <input type='email' name='email' placeholder='your Email'></input>
                        </div>
                        <div className='form-group'>
                            <textarea name='message' placeholder='your message'></textarea>
                        </div>
                        <button type='submit'>Send message</button>
                    </form>
                </div>
                <div className='contact-info'>
                    <h3>Contact Information</h3>
                    <p>+1 123 456</p>
                    <p>info@exapmle.com</p>
                    <p>123 Street,city,Country</p>
                </div>
            </div>
        </div>
        </section>
    </div>
   
  )
}

export default Contact