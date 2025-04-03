import React, { useState } from 'react';

interface Pet {
  name: string;
  breed: string;
}

interface PetCardProps {
  addPet: (pet: Pet) => void;
}

const PetCard: React.FC<PetCardProps> = ({ addPet }) => {
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (petName && petBreed) {
      addPet({ name: petName, breed: petBreed });
      setPetName('');
      setPetBreed('');
    }
  };

  return (
    <div className="card pet-card">
      <h2>Add a New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pet Name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pet Breed"
          value={petBreed}
          onChange={(e) => setPetBreed(e.target.value)}
        />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default PetCard;
