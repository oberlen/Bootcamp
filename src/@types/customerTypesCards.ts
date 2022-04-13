export type CardsTypes = {
  asOfDate: string;
  totalCurrentBalanceNIS: number;
  totalCurrentBalanceUSD: number;
  totalCurrentBalanceEURO: null | number;
  displayOrderCardFlag: boolean;
  CardItems: CardsFromTypes[];
};

export type CardsFromTypes = {
  cardIndex: number;
  cardLast4Digits: string;
  creditCardCompanyCode: number;
  cardNetwork: string;
  cardType: number;
  relatedAccountNumber: string;
  displayName: string;
  friendlyAccountName: null;
  cardHolderName: string;
  cardHolderNameEnglish: string;
  blockCardStatus: number;
  isCardOwner: boolean;
  currentBalance: number;
  datePaymentDue: string;
  creditCardType: number;
  multiCardFlag: boolean;
  nextDebitUSD: number;
  nextDebitEURO: number;
  indicationClubInt: number;
  cardLastUpdateDate: string;
};

export type CardTransTypes = {
  noDataFlag: boolean;
  asOfDate: string;
  cardType: number;
  nextDebitUSD: number;
  nextDebitEURO: number;
  club: string;
  commissionDiscount: number;
  cardLastUpdateDate: string;
  debitAmount: number;
  debitMonth: string;
  cardDebitDate: string;
  totalNISTransactionsAmount: number;
  NearRealTimeTransactionsItems: NearRealTimeTransactionsItemsArr[];
  NisTransactionsItems: NisTransactionsItemsArr[];
  ForeignTransactionsUSDItems: ForeignExchangeTransactionsItemsArr[];
  ForeignTransactionsEURItems: ForeignExchangeTransactionsItemsArr[];
  totalForeignTransactionsAmountUSD: number;
  totalForeignTransactionsAmountEur: number;
  MonthItems: MonthItemsArr[];
  defaultMonth: boolean;
  DebitIndex: string;
  requiredDebitDate: string;
};

export type NearRealTimeTransactionsItemsArr = {
  transactionID: string;
  businessName: string;
  originalTransactionDate: string;
  nrtOriginalAmount: number;
  dealDescription: null;
  nrtOriginalAmountCurrency: string;
  transactionHour: string;
  transactionDebitType: number;
  transactionType: string;
  toSumFlag: number;
  transactionTypeDescription: string;
};

export type ITransactionItems={
  businessName: string,
  originalTransactionDate: string,
  nrtOriginalAmount: number,
  dealDescription: string,
  transactionAmount: number,
  transactionID: string,
  transactionCurrency: string,
  transactionDebitDate: string,
  originalTransactionAmount: number,
  originalTransactionAmountCurrency: string,
  transactionDebitType: number,
  transactionType: string,
  toSumFlag: number,
  transactionIndication: number,
  commissionDiscount?: number,
  billingAmount?: number,
  club?: string,
}
export interface NisTransactionsItemsArr {
  transactionItems: ITransactionItems[],
  totalNISTransactionsAmount: number,  
}

export interface ForeignExchangeTransactionsItemsArr {
  transactionItems: ITransactionItems,
  totalForeignTransactionsAmountUSD: number,
  totalForeignTransactionsAmountEur: number,
}

// export type ForeignTransactionsUSDItemsArr = {
//   businessName: string;
//   originalTransactionDate: string;
//   nrtOriginalAmount: number;
//   dealDescription: string;
//   totalForeignTransactionsAmountUSD: null;
//   totalForeignTransactionsAmountEur: null;
//   transactionIndication: number;
//   transactionAmount: number;
//   transactionDebitDate: string;
//   transactionID: string;
//   transactionCurrency: string;
//   originalTransactionAmount: number;
//   originalTransactionAmountCurrency: string;
//   transactionDebitType: number;
//   transactionType: string;
//   toSumFlag: number;
// };

// export type ForeignTransactionsEURItemsArr = {
//   businessName: string;
//   originalTransactionDate: string;
//   nrtOriginalAmount: number;
//   dealDescription: string;
//   totalForeignTransactionsAmountUSD: null;
//   totalForeignTransactionsAmountEur: null;
//   transactionIndication: number;
//   transactionAmount: number;
//   transactionDebitDate: string;
//   transactionID: string;
//   transactionCurrency: string;
//   originalTransactionAmount: number;
//   originalTransactionAmountCurrency: string;
//   transactionDebitType: number;
//   transactionType: string;
//   toSumFlag: number;
//   commissionDiscount: number;
//   billingAmount: number;
//   club: string;
// };
export type MonthItemsArr = {
  debitIndex: string;
  debitDate: string;
  debitMonth: string;
  debitYear: string;
  defaultMonth: boolean;
  monthWithTransactions: boolean;
};
