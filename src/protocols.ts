export type ApplicationError = {
  name: string;
  message: string;
};

export type InvalidCEP = {
  name: string;
  message: { erro: string };
};

export type ViaCEPAddress = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};
