export interface IClientRepository {
    create: () => clientDto;
    findById: () => clientDto;
    update: () => clientDto;
    delete: () => void;
};

export interface clientDto {

};