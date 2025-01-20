import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/newsletter.png';
import Scroll from '../components/Scroll_Images/Scroll';

const Newsletter = () => {
    return (
        <>
        {/* <Scroll /> */}
        <section className='newsletter bg-[#e7f3ff] lg:pt-6 w-full'>
            <Container>
                <Row className='flex lg:gap-7 lg:px-28 md:px-14 px-6 lg:py-2  w-dvw'>
                    <Col className='text-black lg:pr-8'>
                        <div className="newsletter__content py-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Subscribe now to get useful job information.</h2>

                            <form className="newsletter__input flex items-center justify-between bg-white p-2 mb-4 rounded-md my-8">
                                <input 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    className="border-none px-3 text-base text-gray-800 w-full focus:outline-none"
                                    required
                                />
                                <button className="btn newsletter__btn bg-red-500 text-white rounded-md py-2 px-6 text-lg">
                                    Subscribe
                                </button>
                            </form>

                            <p className="text-gray-800 text-sm pt-3 md:text-lg">Subscribe now to stay updated with the latest job postings and career advice. Be the first to know about exclusive job opportunities tailored to your skills and interests, helping you to advance your career and seize the best opportunities available.</p>
                        </div>
                    </Col>

                    <Col>
                        <div className="newsletter__img hidden md:block ">
                            <img src={maleTourist} alt="" className="w-[60rem] h-[320px] mix-blend-multiply	" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Newsletter;
