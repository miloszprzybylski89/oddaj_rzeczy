import React from 'react';

const AlreadyDone = () => {
    return (
        <section className='alreadyDone'>
            <div className='alreadyDone__element'>
                <span className='alreadyDone__element-number'>10</span>
                <span className='alreadyDone__element-supported'>ODDANYCH WORKÓW</span>
                <span className='alreadyDone__element-description'>Lorem ipsum dolorsit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>
            <div className='alreadyDone__element'>
                <span className='alreadyDone__element-number'>5</span>
                <span className='alreadyDone__element-supported'>WSPARTYCH ORGANIZACJI</span>
                <span className='alreadyDone__element-description'>Lorem ipsum dolorsit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>
            <div className='alreadyDone__element'>
                <span className='alreadyDone__element-number'>7</span>
                <span className='alreadyDone__element-supported'>ZORGANIZOWANYCH ZBIÓREK</span>
                <span className='alreadyDone__element-description'>Lorem ipsum dolorsit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
            </div>
        </section>
    );
}

export default AlreadyDone;