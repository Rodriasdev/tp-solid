export interface IVehicleRepository {
    create: () => vehicleDto;
    findById: () => vehicleDto;
    update: () => vehicleDto;
    delete: () => void;
};

export interface vehicleDto {

};