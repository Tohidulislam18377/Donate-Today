import './DonationImage.css'
import donate9 from '../../assets/images/donation9.jpg'

const DonationImage = () => {
    return (
        <div>
            <div className="donation-img-main">
                <div className="donation-part1">
                    <div className='donate-part3'>
                    <h3>Their lives depend on <br /> your donation</h3>
                    <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim</p>
                    <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset.</p>
                    <button className='btn-donate9'>How to Contribute?</button>
                    </div>
                </div>
                <div className="donation-part2">
                <img className='img9' src={donate9} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DonationImage;