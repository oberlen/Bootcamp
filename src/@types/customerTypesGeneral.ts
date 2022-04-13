export type BalanceTypes = {
  todayBalance: number;
  asOfDateFormat: string;
  showCrefitRemark: boolean;
  maskedNumber: string;
};

export type LoansTypes = {
  totalLoansBalance: number;
  LoanItems: Loan[];
};

export type Loan = {
  asOfDate: string;
  loanIndex: number;
  displayName: string;
  friendlyAccountName: string;
  currentBalance: number;
  initialAmount: number;
  amountDue: number;
  numberOfPaymentsLeft: string;
  initialLoanDate: string;
  dateLastPayment: string;
  loanInArrearsFlag: boolean;
  loanTerm: number;
  loanRepaymentPercentageFormatted: number;
};

export type SecurityDataTypes = {
  SecuritiesDataItems: SecurityDataFromTypes[];
};

export type SecurityDataFromTypes = {
  accountIndex: number;
  maskedNumber: string;
  displayName: null;
  friendlyAccountName: null;
  portfolioID: string;
  timestamp: string;
};

export type SecurityItemTypes = {
  maskedNumber: string;
  debErrorCode: number;
  asOfDate: string;
  asOfHour: string;
  currentBalance: number;
  dailyChangeIndication: number;
  dailyChange: string;
  totalChange: number;
};
