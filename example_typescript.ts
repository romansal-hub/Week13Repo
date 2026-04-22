// Define a User interface
interface User {
  name: string;
  age: number;
  isMember: boolean;
}

// A function that takes a User and returns a greeting message
function greetUser(user: User): string {
  if (user.isMember) {
    return `Welcome back, ${user.name}!`;
  } else {
    return `Hello, ${user.name}. Join us to enjoy more features!`;
  }
}

// Example usage
const user1: User = {
  name: "Alice",
  age: 30,
  isMember: true
};

console.log(greetUser(user1)); // Output: Welcome back, Alice!