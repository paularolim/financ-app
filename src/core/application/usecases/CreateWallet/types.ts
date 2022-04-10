export interface InputWallet {
  title: string;
  user: string;
}

export interface ICreateWallet {
  handle(wallet: InputWallet, onSuccess: () => void, onError: () => void): void;
}
