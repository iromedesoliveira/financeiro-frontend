// src/types/lucro.ts
export interface LucroRequest {
    valorTotal: number;
    perfil: 'CONSERVADOR' | 'MODERADO' | 'AGRESSIVO';
}

export interface LucroResponse {
    id: number;
    valorTotal: number;
    valorPoupanca: number;
    valorDividendos: number;
    valorReinvestimento: number;
    dataProcessamento: string;
}