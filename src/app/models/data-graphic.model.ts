export interface DataGraphicModel {
    metrics: Metric[];
}

export interface Metric{
    title: string;
    percentageSmartphone: number;
    percentageTablet: number;
    totalSmartphone?: number;
    totalTablet?: number;
    total: number;
    colorTablet: string;
    colorSmartphone: string;
}