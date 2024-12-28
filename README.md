# Challenge for FirstChair Services

This project is a challenge for FirstChair Services, designed to demonstrate object-oriented programming (OOP) in TypeScript. It involves creating a zoo system with various animal classes, such as Animal, Giraffe, and GiantTortoise, as well as the Zoo class to manage the collection of animals.

## Setup

### Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (recommended version: LTS)
- npm (usually comes with Node.js)

### Steps to Set Up

1. Clone the repository:

```bash
git clone https://github.com/lllMaxMaxlll/firstChair_challenge.git
cd firstChair_challenge
```

2. Install dependencies:

```bash
npm install
```

3. Build the TypeScript files:
   You need to compile the TypeScript code into JavaScript. Use the following command to build the project:

```bash
npm run build
```

This will compile the TypeScript files into the dist directory.

4. Start the application:
   After building the project, you can run the compiled JavaScript code:

```bash
npm start
```

This will execute the main entry point dist/index.js.

## Project Structure

• src/: Contains the TypeScript source files for all classes and logic (e.g., Animal.ts, Zoo.ts, etc.).

• dist/: The compiled JavaScript files (output directory).

• tsconfig.json: TypeScript configuration file.

## Dependencies

• TypeScript: The project is built using TypeScript for static typing and better maintainability.

## Example Usage

Here’s an example of how the Zoo and Animal classes can be used:

**Create or modify src/index.ts**

```typescript
import Zoo from "./src/Zoo";
import Animal from "./src/Animal";
import GiantTortoise from "./src/GiantTortoise";

const zoo = new Zoo("Safari Zoo", "New York", "9:00 AM - 5:00 PM");

// Create some animals
const giraffe = new Animal("Giraffe", "Gerald", 4, "Male");
const tortoise = new GiantTortoise("Tucker", "Male", 120);

// Add animals to the zoo
zoo.addAnimal(giraffe);
zoo.addAnimal(tortoise);

// Print animal descriptions
zoo.printAnimalDescriptions();

// Print animal count
zoo.printAnimalCount();

// Get the admission price for the current day
const todayPrice = zoo.getAdmissionPrice();
console.log(`Admission price for today: $${todayPrice}`);
```
