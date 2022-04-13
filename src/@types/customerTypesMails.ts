export type LeumiMailObject = {
    "@Partial": boolean,
    MailItems:IMailItems,
    elmGeneralStrings:IelmGeneralStrings
}

export type IMailItems= {
    "#text": string,
     CountTotalMail: string,
     CountUnreadMail: string,
     CreditCardFlag: string,
     LeumiMailMessage: string,
     ClientIndexs: IClientIndexs,
 }
 export type IClientIndexs={
    "#text": string,
    ClientIndex:IClientIndex,
 }
 export type IClientIndex={
        "@id": string,
        "#text": string,
        Docs:IDocs,
    }
 
 export type IDocs={
        "#text": string,
        Doc:IDoc[] 
    }
 export type IDoc={
            "#text": string,
            DocID: string,
            Status: string,
            MailType: string,
            MailTitle: string,
            DeliveryDate: string,
            OpenDate:string,
    
 }
export type IelmGeneralStrings= {
    InfMessage1: string,
    InfMessage2: string,
    InfMessage3: string,
    LinkToHomePage:string,
    LinkToCreditcards: string
}

export interface IMessage {
    LeumiMailObject: IMessageObject,
  }

export type IMessageObject={
    "@Partial": string,
    Clientindex:string,
    DocID: string,
    MailFile: string,
}