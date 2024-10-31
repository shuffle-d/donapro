import { describe, it, expect } from 'vitest';
import { isValidCPF } from './CPFProve';

describe('isValidCPF', () => {
  it('Teste de CPF Válido', () => {
    expect(isValidCPF('123.456.789-09')).toBe(true);
    expect(isValidCPF('111.444.777-35')).toBe(true);
  });

  it('Teste de CPF Inválido (Cálculo deu Errado)', () => {
    expect(isValidCPF('123.456.789-00')).toBe(false);
    expect(isValidCPF('111.444.777-10')).toBe(false); 
  });

  it('Teste de CPF Inválido (com Strings)', () => {
    expect(isValidCPF('abc.def.ghi-jk')).toBe(false);
    expect(isValidCPF('111.444.777-35abc')).toBe(false);
  });

  it('Teste de CPF Inválido (mais de 11 números)', () => {
    expect(isValidCPF('123456789')).toBe(false);
    expect(isValidCPF('123456789012')).toBe(false);
  });

  it('Teste de CPF Inválido (números iguais)', () => {
    expect(isValidCPF('111.111.111-11')).toBe(false);
    expect(isValidCPF('222.222.222-22')).toBe(false);
  });
});