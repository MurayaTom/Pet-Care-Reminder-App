import React, { useState } from 'react';
import PetCard from './PetCard';
import ReminderCard from './ReminderCard';
import './App.css'; // We'll use custom CSS for styling

interface Pet {
  name: string;
  breed: string;
}

interface Reminder {
  text: string;
  time: string;
}

const App: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const handleAddPet = (pet: Pet) => setPets([...pets, pet]);
  const handleAddReminder = (reminder: Reminder) => setReminders([...reminders, reminder]);

  return (
    <div className="app-wrapper">
      <h1 className="title">Pet Care Reminder</h1>
      <div className="content-wrapper">
        <PetCard addPet={handleAddPet} />
        <ReminderCard addReminder={handleAddReminder} />
      </div>
      <div className="pet-list">
        <h2>All Pets</h2>
        <ul>
          {pets.map((pet, index) => (
            <li key={index}>{pet.name} ({pet.breed})</li>
          ))}
        </ul>
      </div>
      <div className="reminder-list">
        <h2>Reminders</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              {reminder.text} - {reminder.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
