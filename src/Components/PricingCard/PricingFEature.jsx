import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFEature = ({feature}) => {
    return (
        
        <p className='flex items-center mt-1'><CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFEature;