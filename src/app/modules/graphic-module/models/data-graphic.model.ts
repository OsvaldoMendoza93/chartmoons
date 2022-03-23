export interface DataGraphicModel {
    metrics: Metrics[];
}

export interface Metrics{
    title: string;
    porcentSmartphone: number;
    porcentTablet: number;
    totalSmartphone?: number;
    totalTablet?: number;
    total: number;
    
}