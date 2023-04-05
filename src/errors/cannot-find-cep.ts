import { InvalidCEP } from '@/protocols';

export function invalidCep(): InvalidCEP {
  return {
    name: 'InvalidCEP',
    message: { erro: 'true' },
  };
}
