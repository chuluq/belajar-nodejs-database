function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test('tag function', () => {
  const name = 'Chuluq';
  const lastName = 'Choirul';

  tagFunction`Hello ${name} ${lastName}!, How are you?`;
  tagFunction`Bye ${name} ${lastName}!, see you later`;
});

test('tag function sql', () => {
  const name = "'Chuluq'; DROP table users;";
  const age = 26

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});