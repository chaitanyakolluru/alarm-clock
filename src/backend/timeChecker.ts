import { delay } from './delay';
import { timerCalc } from './timerCalc';

export const timeChecker = async (alarmTime: string): Promise<boolean> => {
  while (!(await timerCalc(alarmTime))) {
    await delay(10000);
  }

  return true;
};
