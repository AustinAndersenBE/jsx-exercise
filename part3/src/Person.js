const MAX_NAME_LENGTH_TO_SHOW = 6;

function Person({ age, hobbies, name }) {
  const voteText = age >= 18 ? 'Please go vote!' : 'You must be 18';

  const renderHobbies = (hobbies) => {
    return hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
  };

  return (
    <div>
      <p> Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
        <li>Age: {age}</li>
        <ul>
        Hobbies:
        {renderHobbies(hobbies)}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}