export interface IVehicleRepository {
    create: () => vehicleDto;
    findById: () => vehicleDto;
    update: () => vehicleDto;
    delete: () => void;
};

export interface vehicleDto {
    id?: number;
    brand: string;
    model: string;
    year: number;
    price: string;
};