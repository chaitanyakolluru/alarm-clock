import * as timeDiff from './timeDiff';
import { timerCalc } from './timerCalc';

describe('time calculator', () => {
  it('should respond when called', async () => {
    expect(await timerCalc('abc')).toBeDefined;
  });

  it('should say true when the time is current time', async () => {
    jest.spyOn(timeDiff, 'timeDiff').mockReturnValue(12345);

    expect(await timerCalc('18:13')).toBeTruthy();
  });

  it('should say false when the time is NOT current time', async () => {
    jest.spyOn(timeDiff, 'timeDiff').mockReturnValue(123456);

    expect(await timerCalc('18:13')).toBeFalsy();
  });
});
