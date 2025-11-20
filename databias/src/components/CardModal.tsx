// CardModal.tsx
import React from 'react';
import { CardProps } from './Types';
import { createPortal } from 'react-dom'; // Pour s'assurer que la modale est au-dessus de tout

interface CardModalProps {
    data: CardProps;
    onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ data, onClose }) => {

    // Pour bloquer le scroll du body lorsqu'on ouvre la modale (bonne pratique)
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);


    const modalContent = (
        // Fond de la modale: Plein écran, centré (fixed inset-0), semi-transparent
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={onClose} // Fermer en cliquant à l'extérieur
        >
            {/* Contenu de la modale: Centré, grande taille, blanc, défilable */}
            <div
                className="relative m-4 h-5/6 w-full max-w-4xl scale-100 transform overflow-y-auto rounded-xl bg-white p-8 shadow-2xl transition-all duration-300 ease-out"
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant dans le contenu
            >
                {/* Bouton de Fermeture */}
                <button
                    className="absolute right-4 top-4 text-3xl font-light text-gray-500 hover:text-gray-900"
                    onClick={onClose}
                    aria-label="Fermer la modale"
                >
                    &times;
                </button>

                {/* Grille pour le contenu (Description à gauche, Image à droite) */}
                <div className="flex h-full flex-col gap-8 md:flex-row">

                    {/* Colonne du Contenu Textuel et Liens (Gauche) */}
                    <div className="flex flex-col md:w-1/2">
                        <h2 className="mb-4 text-4xl font-bold text-blue-700">{data.title}</h2>
                        <div className="flex-grow overflow-y-auto pr-4">
                            <p className="mb-6 whitespace-pre-line text-lg text-gray-800">{data.content}</p>
                        </div>

                        {/* Liens Sources (Bas de la colonne de gauche) */}
                        {data.sourceLinks && data.sourceLinks.length > 0 && (
                            <div className="mt-4 border-t pt-4">
                                <h3 className="mb-2 text-xl font-semibold text-gray-600">Liens Sources</h3>
                                <ul className="space-y-2">
                                    {data.sourceLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 transition duration-150 hover:text-blue-700 hover:underline"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Colonne de l'Image (Droite) */}
                    <div className="flex items-center justify-center md:w-1/2">
                        {data.imageUrl ? (
                            <img
                                src={data.imageUrl}
                                alt={data.title}
                                className="max-h-full rounded-lg border border-gray-100 object-contain shadow-lg"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed p-10 text-center text-gray-400">
                                [Image non disponible]
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    // Utiliser createPortal pour placer la modale en dehors du flux normal (meilleur pour les modales)
    return createPortal(modalContent, document.body);
};

export default CardModal;