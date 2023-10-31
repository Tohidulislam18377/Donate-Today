import './DonationPlain.css'

import img1 from '../../assets/icons/icon4.svg'
import img2 from '../../assets/icons/icon5.svg'
import img3 from '../../assets/icons/icon11.svg'

const DonationPlain = () => {
    return (
        <div>
            <div className='main-donation-container'>
                <h4 className='main-title'>Our Donate Plan</h4>
                <p className='main-description'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim</p>
            </div>
            <div className='donate-details'>
                <div className='donate-details1'>
                    <img className='img1' src={img1} alt="" />
                    <h3 className='donate-plain1'>Food for a family</h3>
                    <p className='donate-plain-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className='donate-details2'>
                    <img className='img2' src={img2} alt="" />
                    <h3 className='donate-plain2'>Food for a family</h3>
                    <p className='donate-plain-description2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                 <div className='donate-details3 '>
                    <img className='img3' src={img3} alt="" />
                    <h3 className='donate-plain3'>Food for a family</h3>
                    <p className='donate-plain-description3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>
    );
};

export default DonationPlain;