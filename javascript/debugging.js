const jenny = {
  name: "Jennifer",
  surname: "Lopez",
  born: 1969,
};

const getFullName = ({ name, surname }) => `${name} ${surname}`;
const getAge = ({ born }) => new Date().getFullYear() - born;

const fullName = getFullName(jenny);
const age = getAge(jenny);

const result = `${fullName} is ${age} years old.`;

console.log(result);
