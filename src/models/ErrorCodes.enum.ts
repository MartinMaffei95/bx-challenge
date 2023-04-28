export const TO_MANY_REQUESTS = 'TO_MANY_REQUESTS';
export const GENERIC_ERROR = 'GENERIC_ERROR';

export enum Errors {
  TO_MANY_REQUESTS = 'TO_MANY_REQUESTS',
  GENERIC_ERROR = 'GENERIC_ERROR',
}

export interface FetchError {
  reqTo: 'RANDOMNUMBER' | 'COINS' | 'BOTH';
  error: Errors;
}
