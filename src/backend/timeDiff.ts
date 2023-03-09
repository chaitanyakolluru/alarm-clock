import { DateTime } from 'luxon';

export const timeDiff = async (alarmTime: string): Promise<number> =>
  DateTime.now().diff(DateTime.fromFormat(alarmTime, 'hh:mm')).toMillis();
