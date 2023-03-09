import { timeChecker } from './timeChecker';
import * as timerCalc from './timerCalc';

describe('ping for time check', () => {
  it('should exist', async () => {
    expect(timeChecker('xx:yy')).toBeDefined();
  });

  it('should keep checking for time and report back on time matching when it does', async () => {
    jest.spyOn(timerCalc, 'timerCalc').mockReturnValue(Promise.resolve(true));

    expect(timeChecker('01:01')).toBeTruthy();
  });
});
