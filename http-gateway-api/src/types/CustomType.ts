export type UserFromGoogle = {
  fullname: string;
  image: string;
  email: string;
  provider: string;
  acccessToken?: string;
  role: string;
};
export type ResponseCreateLinkPayment = {
  bin: string;
  accountNumber: string;
  accountName: string;
  amount: number;
  description: string;
  orderCode: number;
  curency: string;
  paymentLinkId: string;
  status: string;
  checkoutUrl: string;
  qrCode: string;
};

export type RequestConfirm = {
  code: string;
  desc: string;
  success: boolean;
  data: {
    orderCode: number;
    amount: number;
    description: string;
    accountNumber: string;
    reference: string;
    transactionDateTime: string;
    currency: string;
    paymentLinkId: string;
    code: string;
    desc: string;
    counterAccountBankId: string;
    counterAccountBankName: string;
    counterAccountName: string;
    counterAccountNumber: string;
    virtualAccountName: string;
    virtualAccountNumber: string;
  };
  signature: string;
};

export enum CommodityType {
  COURSE = 'COURSE',
  KIT = 'KIT',
  DEVICE = 'DEVICE'
}