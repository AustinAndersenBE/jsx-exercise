function App() {
  const people = [
    {
      name: "Homer",
      age: 38,
      hobbies: ["bowling", "watching tv", "drinking beer"],
    },
    {
      name: "Marge",
      age: 34,
      hobbies: ["painting", "gambling"],
    },
    {
      name: "Bart",
      age: 10,
      hobbies: ["skateboarding", "making prank calls"],
    },
    {
      name: "Lisa",
      age: 8,
      hobbies: ["reading", "saxophone", "eating vegetables"],
    },
  ];

  return (
    <div>
      {people.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          hobbies={person.hobbies}
        />
      ))}
    </div>
  );
}