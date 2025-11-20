import React from 'react';
import { SearchBarProps } from './Types';
import { useTranslation } from 'react-i18next';

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    const { t } = useTranslation();
    return (
        <div className="w-full max-w-lg">
            <input
                type="text"
                placeholder={t('cb.search')}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-6 py-3 border border-gray-300 rounded-full text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                aria-label="Recherche de cartes"
            />
        </div>
    );
};

export default SearchBar;