import { DateTime } from 'luxon';

export const timeDiff = (alarmTime: string): number =>
  DateTime.now().diff(DateTime.fromFormat(alarmTime, 'hh:mm')).toMillis();
