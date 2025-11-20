import i18next from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-gray-800 shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo / Nom du Site */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-white">
                            DataBias
                        </a>
                    </div>

                    {/* Liens Desktop (Masqués sur Mobile) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {/* Liens traduits */}
                            <a
                                href="#"
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white"
                            >
                                {t('Search')}
                            </a>
                            <a
                                href="#"
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white"
                            >
                                {t('Contact')}
                            </a>

                            {/* Boutons de Langue */}
                            <button
                                onClick={() => i18next.changeLanguage('en')}
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white"
                            >
                                EN
                            </button>
                            <button
                                onClick={() => i18next.changeLanguage('fr')}
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white"
                            >
                                FR
                            </button>
                        </div>
                    </div>

                    {/* Bouton Mobile (Masqué sur Desktop) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            {/* Icône Burger (Hamburger ou X) */}
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile (S'affiche ou se masque selon l'état 'isOpen') */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        <div>
                            <a
                                href="#"
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white"
                            >
                            {t('Search')}
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white"
                            >
                                {t('Contact')}
                            </a>
                        </div>
                        <div>
                        {/* Boutons de Langue */}
                            <button
                                onClick={() => i18next.changeLanguage('en')}
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white"
                            >
                                EN
                            </button>    
                        </div>
                        <div>
                            <button
                                onClick={() => i18next.changeLanguage('fr')}
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 hover:bg-gray-700 hover:text-white"
                            >
                                FR
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;