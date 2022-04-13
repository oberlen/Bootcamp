export enum ROUTES{
    MAIN = 'MAIN',
    GENERAL = 'GENERAL',
    CREDITCARDS = 'CREDITCARDS',
    MESSAGES = 'MESSAGES',
    MESSAGEDETAIL='MESSAGEDETAIL'
}

export interface AmountType {
    value: string;
    mark: '₪' | '$' | '$' | '$' | '€' | '£' | 'CHF' | '¥' | 'د.إ' | string;
  }