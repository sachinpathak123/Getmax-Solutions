import './Contact.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import arrow from '../../assets/arrow.png';
import insta from '../../assets/instapur.svg'
import linked from '../../assets/inpur.svg'
import fb from '../../assets/fbpur.svg'
import twitter from '../../assets/twitterpur.svg'


function Contact() {
    return (
        <div className='div1' id= "contact-us">
            <div className='div2'>
                <div className='div3'>
                    <h1 className='label'>
                        Our Vision
                    </h1>
                    <p className='text1'>
                        Connect for Excellence – Your Gateway to Seamless Collaboration and Business Advancement.
                    </p>
                    <img src={image1} />
                    <p>
                    </p>
                    <p className='text1'>
                        In a world of constant evolution, our commitment is unwavering – to innovate, inspire, and propel businesses into a future where success knows no limits. Together, let's shape excellence and redefine what's possible.
                        <br />
                        <br />
                        - <b>Yuvaraj</b>
                    </p>
                    <div className='div8'>
                        <img src={image2} className='image' id='image1st' />
                        <img src={image2} className='image' />
                        <img src={image2} className='image' />
                        <img src={image2} className='image' />
                    </div>
                    <div className='div9'>
                        <h5 className='imgtxt' id='text1st'>Yuvaraj</h5>
                        <h5 className='imgtxt'>Tanmaie</h5>
                        <h5 className='imgtxt'>Mariyam</h5>
                        <h5 className='imgtxt'>Reshma</h5>
                    </div>
                </div>
                <div className='div4'>
                    <form>
                        <h3 align='center'>Reach Out to Us</h3>
                        <p>
                            Email
                        </p>
                        <input type='email' placeholder='Enter your email' className='message'/>
                        <p className='msg'>
                            Message
                        </p>
                        <input type='text' placeholder='Enter your message' className='message' />
                        <br />
                        <button type='submit' className='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='div5'>
                <div className='div6'>
                    <h1>Get Max Solutions</h1>
                    <p className='text2'>
                        Get started now try our product
                    </p>
                    <input className='mail' placeholder='Enter your Email here' />
                    <button type='submit' className='sub1'>
                        <img src={arrow} className='arrow' />
                    </button>
                    <br />
                    <p className='cr'>
                        © 2022 getmax healthcare Pvt. Ltd.
                        <br />
                        Copyright and rights reserved
                    </p>
                </div>
                <div className='div7' align='center'>
                    <p>
                        Support
                    </p>
                    <img src = {insta} className='smicon'  />
                    <img src = {linked} className='smicon'  />
                    <img src = {fb} className='smicon'  />
                    <img src = {twitter} className='smicon'  />
               
                    <p>
                        <a href='' className='ar'>About</a>
                        </p><p>
                        <a href=''>Contact Us</a>
                    </p>
                    <p>Terms and Conditionds </p><p> Privacy policy</p>
                </div>
            </div>
        </div>

    );
}

export default Contact;