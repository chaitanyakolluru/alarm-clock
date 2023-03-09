import { timeDiff } from './timeDiff';

// this async function takes in a string of format hh::mm and returns back true when
export const timerCalc = async (alarmTime: string): Promise<boolean> => {
  const timeRes = await timeDiff(alarmTime);
  return timeRes > 0 && timeRes < 60000;
};
