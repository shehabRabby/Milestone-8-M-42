import React, { use } from 'react';
import PricingCard from './PricingCard/PricingCard';
import DaisyPricingCard from './DaisyCard/DaisyPricingCard';

const PriceingOption = ({pricePromise}) => {
    const pricingData = use(pricePromise);
    
    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(priceing => <PricingCard key={priceing.id} priceing={priceing}></PricingCard>)
                } */}

                {
                    pricingData.map((priceing,index) => <DaisyPricingCard key={index} priceing={priceing}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PriceingOption;