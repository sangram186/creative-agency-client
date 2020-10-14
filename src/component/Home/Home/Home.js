import React from 'react';
import Customer from '../Customer/Customer';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Samples from '../Samples/Samples';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Customer />
            <Services />
            <Samples />
            <FeedBack />
            <Footer />
        </div>
    );
};

export default Home;