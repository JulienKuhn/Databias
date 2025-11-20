import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBar from './SearchBar';
import Card from './Card';
import { CardData } from './Types';

const CardBody: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { t } = useTranslation();

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    /**
     * Helper function to convert the translation object (key-value) into a CardData array.
     * This is necessary because i18next returns an object for 'card_data'.
     */
    const transformData = (dataObject: any): CardData[] => {
        // Basic type check
        if (!dataObject || typeof dataObject !== 'object') return [];

        return Object.values(dataObject).map((item: any) => ({
            title: item.title,
            content: item.content,
            sort: item.sort,
        }));
    };

    /**
     * Retrieves and transforms card data from translations.
     * useMemo ensures the operation runs only when the translation function 't' changes (i.e., language switch).
     */
    const initialCards: CardData[] = useMemo(() => {
        // Fetch the full card data object from the i18n file
        const cardDataObject = t('card_data', { returnObjects: true }) as Record<string, any>;

        if (typeof cardDataObject === 'object' && cardDataObject !== null) {
            return transformData(cardDataObject);
        }
        return [];
    }, [t]);

    // Fetch the page title from translations
    const title: string = t('page_title');

    /**
     * Initial card sorting logic based on the 'sort' field (alphabetical order).
     * Recalculates only if initialCards changes (i.e., language switch).
     */
    const sortedCards = useMemo(() => {
        if (!initialCards || initialCards.length === 0) return [];

        return [...initialCards].sort((a, b) => {
            // Case-insensitive comparison
            const sortA = a.sort.toLowerCase();
            const sortB = b.sort.toLowerCase();

            if (sortA < sortB) return -1;
            if (sortA > sortB) return 1;
            return 0;
        });
    }, [initialCards]);

    /**
     * Filtering logic based on user search term.
     * Depends on the sorted list and the search input.
     */
    const filteredCards = useMemo(() => {
        if (!searchTerm.trim()) {
            return sortedCards; // Return the full sorted list if no search term
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        return sortedCards.filter((card: CardData) =>
            // Check title OR content
            card.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            card.content.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [sortedCards, searchTerm]);

    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10">

            <header className="mb-8 flex flex-col items-center">
                <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    {title}
                </h1>
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                />
            </header>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCards.length > 0 ? (
                    filteredCards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))
                ) : (
                    <p className="col-span-full p-10 text-center text-xl italic text-gray-500">
                        {/* Translate the "No results found" message using i18next for consistency */}
                        {t('no_results_message', { searchTerm: searchTerm })}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CardBody;