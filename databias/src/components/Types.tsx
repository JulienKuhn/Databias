export interface CardData {
    title: string;
    content: string;
    sort: string;
}

export interface CardBodyProps {
    title: string;
    initialCards: CardData[];
}

export interface CardProps {
    title: string;
    content: string;
    // Nouveaux champs pour la modale
    sort: string; // Gardé pour la complétude
    imageUrl?: string; // URL de l'image détaillée
    sourceLinks?: { label: string; url: string }[]; // Tableau de liens sources
    onCardClick: (cardData: CardProps) => void; // Nouvelle prop: fonction de gestion du clic
}


export interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}