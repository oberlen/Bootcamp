export const API = {
  POST: {},
  GET: {
    GET_LOANS: '/uiapiproxy/v1/mvp/mobile/accounts/1/balance/loans',
    GET_BALANCE: '/uiapiproxy/v1/mvp/mobile/accounts/1/balance/checkingBalance',
    GET_SECURITYDATA: '/uiapiproxy/v1/mvp/mobile/accounts/1/securitiesData',
    GET_SECURITYITEMS:'/mtrade/lti-app/api/tools/statement',
    GET_CARDS: '/uiapiproxy/v1/mvp/mobile/accounts/1/CardsList',
    GET_CARDS_TRANS:(cardIndex:number):string=>`/uiapiproxy/v2/mvp/mobile/accounts/1/cards/${cardIndex}/CardTransactions`,
    GET_MAILS:'/eBanking/PartialUC/UC_M_595/MB_LeumiMail.aspx',
    GET_MAIL:'/eBanking/PartialUC/UC_M_595/MB_LeumiMail.aspx'
   },
};