class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('firstName must be a string');
    }
    this.#firstName = value;
  }

  set secondName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('secondName must be a string');
    }
    this.#secondName = value;
  }

  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError('age must be a number');
    }
    this.#age = value;
  }

  get age() {
    return this.#age;
  }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  introduce() {
    return `My name is ${this.name}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.#age += 1;
  }
}

module.exports.User = User;

module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

module.exports.createUsers = function (data) {
  return data.map(({ firstName, secondName, age }) => new User(firstName, secondName, age));
};

module.exports.findUsersByAge = function (users, age) {
  return users.filter((user) => user.age === age);
};

module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return [...users].sort(TestUtils.sortComparator);
  };
};

module.exports.celebrate = function (users) {
  return users.map((user, index) => {
    if (index % 2 !== 0) {
      user.celebrateBirthday();
    }
    return user;
  });
};
