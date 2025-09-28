import React from 'react';
import PricingFEature from './PricingFEature';

const PricingCard = ({priceing}) => {
    console.log(priceing)
    const {id,name,price,info,features} = priceing;
    return (
        <div className='flex flex-col border-2 rounded-2xl border-orange-600 bg-orange-500 p-4 m-2'>
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className='text-4xl'>{price}</h4>
            </div>
            {/* card body  */}
            <div className='bg-orange-400 p-4 mt-5 flex-1 rounded-xl'>
                <p>{info}</p>
                {
                    features.map((feature,index) => <PricingFEature key={index} feature={feature}></PricingFEature>)
                }
            </div>
            <button className="btn w-full mt-2">Subscribe</button>
        </div>
    );
};

export default PricingCard;