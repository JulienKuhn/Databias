import React from 'react';
import { CardProps } from './Types';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="flex transform flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-xl font-semibold text-blue-600">
                {title}
            </h3>
            <p className="text-base text-gray-700">
                {content}
            </p>
        </div>
    );
};

export default Card;