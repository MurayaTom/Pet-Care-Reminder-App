import React, { useState } from 'react';

interface Reminder {
  text: string;
  time: string;
}

interface ReminderCardProps {
  addReminder: (reminder: Reminder) => void;
}

const ReminderCard: React.FC<ReminderCardProps> = ({ addReminder }) => {
  const [reminderText, setReminderText] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reminderText && reminderTime) {
      addReminder({ text: reminderText, time: reminderTime });
      setReminderText('');
      setReminderTime('');
    }
  };

  return (
    <div className="card reminder-card">
      <h2>Set a Reminder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Reminder Text"
          value={reminderText}
          onChange={(e) => setReminderText(e.target.value)}
        />
        <input
          type="time"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
        />
        <button type="submit">Set Reminder</button>
      </form>
    </div>
  );
};

export default ReminderCard;
