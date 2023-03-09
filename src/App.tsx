import { FormEvent, useState } from 'react';
import { timeChecker } from './backend/timeChecker';

const App = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [timeForAlarm, setTimeForAlarm] = useState(false);
  const [alarmSet, setAlarmSet] = useState(false);

  const handleOnSet = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAlarmSet(true);
    while (!(await timeChecker(alarmTime))) {}

    setTimeForAlarm(true);
  };

  const handleOnClear = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTimeForAlarm(false);
    setAlarmSet(false);
  };

  return (
    <div className="card w-screen bg-base-100 shadow-xl" data-theme="cupcake">
      <div className="card-body">
        <h2 className="card-title justify-center">Alarm Clock!</h2>
        <div className="card-actions justify-evenly">
          <input
            type="text"
            placeholder="Enter alarm time in HH:MM"
            className="input input-bordered input-ghost input-lg w-full max-w-xs"
            onChange={(e) => {
              setAlarmTime(e.target.value);
            }}
            value={alarmTime}
          />
          <button className="btn btn-info justify-end" onClick={handleOnSet}>
            Set
          </button>
        </div>

        {alarmSet && (timeForAlarm || <p>Alarm set!</p>)}

        {(timeForAlarm && (
          <>
            <img src="/alarm.png" alt="Alarm" />
            <button className="btn btn-success" onClick={handleOnClear}>
              Clear
            </button>
          </>
        )) ||
          ''}
      </div>
    </div>
  );
};

export default App;
