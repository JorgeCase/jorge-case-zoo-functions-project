const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Não passando argumentos a função deverá retornar o objeto com os dias, o horário de abertura e fechamento', () => {
    const objectReturn = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(objectReturn);
  });
  it('Verifica se ao receber um parâmetro de dia que não está na lista, a função retorna a mensagem de erro: "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Sábado', '09:00-AM')).toThrow(Error);
    expect(() => getOpeningHours('Sábado', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Verifica o formato de entrada dos parâmetros referentes a hora, minuto e período do dia, retornando mensagens de erro específicas para cada parâmetro', () => {
    expect(() => getOpeningHours('Saturday', 'HH:00-AM')).toThrow(Error);
    expect(() => getOpeningHours('Saturday', 'HH:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Saturday', '09:MM-AM')).toThrow(Error);
    expect(() => getOpeningHours('Saturday', '09:MM-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Saturday', '09:00-00')).toThrow(Error);
    expect(() => getOpeningHours('Saturday', '09:00-00')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se o parâmetro de hora esta dentro do intervalo de 0 a 12 e se os minutos estão dentro do intervalo de 0 a 59', () => {
    expect(() => getOpeningHours('Saturday', '14:00-PM')).toThrow(Error);
    expect(() => getOpeningHours('Saturday', '14:00-PM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Saturday', '09:60-PM')).toThrow(Error);
    expect(() => getOpeningHours('Saturday', '09:60-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Verifica se a função retorna a mensagem "The zoo is closed" para os argumentos "Monday" e "09:00-AM", e ainda se ela é case sensitive', () => {
    expect(getOpeningHours('mOnDaY', '09:00-aM')).toBe('The zoo is closed');
  });
  it('Verifica se a função retorna a mensagem "The zoo is open" quando recebe os argumentos de dia e hora de funcionamento corretos', () => {
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe('The zoo is open');
  });
});
