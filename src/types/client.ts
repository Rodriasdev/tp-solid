export interface IClientRepository {
    create: () => clientDto;
    findById: () => clientDto;
    update: () => clientDto;
    delete: () => void;
};

export interface clientDto {
    id?: number;
    name: string;
    email: string;
    telephone: string;
};