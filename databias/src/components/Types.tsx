export interface CardData {
    title: string;
    content: string;
    sort: string;
}

export interface CardBodyProps {
    title: string;
    initialCards: CardData[];
}

export interface CardProps extends CardData { }

export interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}