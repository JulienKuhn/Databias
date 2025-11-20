// Card.tsx
import React from 'react';
import { CardProps } from './Types'; // Assurez-vous d'importer l'interface mise à jour

const Card: React.FC<CardProps> = (props) => {
    const { title, content, onCardClick } = props;

    const handleClick = () => {
        // Appelle la fonction passée par le parent avec toutes les données de la carte
        onCardClick(props);
    };

    return (
        // Rendre le div cliquable (cursor-pointer) et accessible (role="button")
        <div
            className="flex transform cursor-pointer flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            onClick={handleClick}
            role="button"
            tabIndex={0} // Rend l'élément focusable
            onKeyDown={(e) => { // Gère l'accessibilité au clavier (touche Entrée)
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                }
            }}
        >
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