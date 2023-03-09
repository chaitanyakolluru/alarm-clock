import { delay } from './delay';
import { timerCalc } from './timerCalc';

export const timeChecker = async (alarmTime: string): Promise<boolean> => {
  while (!(await timerCalc(alarmTime))) {
    await delay(60000);
  }

  console.log('this is timer calc', await timerCalc(alarmTime));
  return true;
};
