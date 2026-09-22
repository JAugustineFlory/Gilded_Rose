# Gilded Rose: JavaScript with Vite

This version of the Gilded Rose refactoring kata uses modern JavaScript modules,
[Vite](https://vite.dev/), and [Vitest](https://vitest.dev/).

## Prerequisites

- Node.js 22.12 or newer
- npm

If you use `nvm`, run `nvm use` from this directory. If that version is not
installed yet, run `nvm install` first.

## Setup

```sh
cd JS-Vite
npm install
```

## Run tests

Run the tests once:

```sh
npm test
```

Keep tests running while you work:

```sh
npm run test:watch
```

Generate a coverage report:

```sh
npm run test:coverage
```

## Complete the exercise

1. Read [`../GildedRoseRequirements.txt`](../GildedRoseRequirements.txt).
2. Add characterization tests in `test/gilded_rose.test.js` until each rule is
   protected.
3. Refactor `src/gilded_rose.js` in small steps.
4. Run the tests frequently and keep behavior unchanged.

The three included tests are only a starting point; they do not cover all of
the requirements.
