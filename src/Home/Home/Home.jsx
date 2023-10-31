import DonateToday from '../DonateToday/DonateToday';
import DonationImage from '../DonationImage/DonationImage';
import DonationPlain from '../DonationPlain/DonationPlain';
import UpdateSearch from '../UpdateSearch/UpdateSearch';
import './Home.css'

const Home = () => {
    return (
        <div>
               <div className='bg-img'>
               <div className='sub-title'>
               <h3 className='title'>Let’s Help Those Who Are <br /> More In 
               Need</h3>
               <p className='description'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim</p>
               <div className='btn-primary'>
                <button className='btn'>Donate Now</button>
               </div>
               </div>
               {/* donate today */}
               </div>
               <DonateToday></DonateToday>
               {/* Donation plain */}
               <DonationPlain></DonationPlain>
               {/* donate image main */}
               <DonationImage></DonationImage>
               {/* update search */}
               <UpdateSearch></UpdateSearch>
               
        </div>
    );
};

export default Home;