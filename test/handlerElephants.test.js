const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Quando a função não recebe um parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Ao receber o argumento "count", o retorno deve ser o número 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Ao receber o argumento "names", o retorno deve ser um array contendo os nomes Ilana e Jefferson', () => {
    expect(handlerElephants('names')).toContainEqual('Ilana', 'Jefferson');
  });
  it('Ao receber o argumento "averageAge", o retorno deve ser um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Ao receber o argumento "popularity", o retorno deve ser o número 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Ao receber o argumento "location", o retorno deve ser o NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Se o parâmetro da função handlerElephantes não for uma string, retornará a mensagem "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Se o parâmetro da função handlerElephantes não tem funcionalidade, deverá retornar null', () => {
    expect(handlerElephants('any')).toBe(null);
  });
});
