import './DonateToday.css'

const DonateToday = () => {
    return (
        <div>

            <h4 className='donate-title'>Donate Today</h4>
            <p className='donate-description'>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli <br /> deterruisset. No duo populo animal noluisse, enim</p>

            <div className='donate-container'>
                <div className='taka-bg1'>
                    <p>100tk</p>
                </div>
                <div className='taka-bg2'>
                    <p className='taka-description'>200tk</p>
                </div>
                <div className='taka-bg1'>
                    <p>300tk</p>
                </div>
                <div className='taka-bg1'>
                    <p>400tk</p>
                </div>
                <div className='taka-bg1'>
                    <p>500tk</p>
                </div>
            </div>
            <p className='amount'>Other Amount (Taka)</p>
            <div className='line'>
                <hr />
            </div>
            <div className='btn-primary'>
                <button className='btn'>Donate Now</button>
            </div>

        </div>
    );
};

export default DonateToday;