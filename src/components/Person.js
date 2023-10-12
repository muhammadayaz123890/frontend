import React from 'react';
const PersonCard = ({ imageSrc, name, bio }) => {
  return (
    <div className="flex pb-4 p-8  ml-8">
      <img
        src={imageSrc}
        alt={name}
        className="border-4 w-48 h-48 scale-150  object-fill m-8"
      />
      <div className='ml-8 px-4 justify-start'>
        <h1 className="text-green-500 text-8xl font-semibold">{name}</h1>
        <p className="mt-8 text-gray-400">{bio}</p>
      </div>
    </div>
  );
};

export default PersonCard;
