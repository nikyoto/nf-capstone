# 🦉 Hoo!? - Who would rather?

> Hoo!? is a multiplayer party app which you can play with your friends to find out who would rather do a random exciting task.

## Description

**This is a capstone project for [neuefische](https://www.neuefische.de/) web development bootcamp.**

Hoo!? is a multiplayer party app which you can play with your friends to find out
who would rather do a random exciting task.
I used a huge variety of tools which you can find down below.

The majority had to be done with PubNub which let me connect multiple devices together.
I needed that in case to create a lobby for multiple players.

However it's not done completely, as it still has some errors when trying to
connect all players to the question page. I'll update the README, once it's done!

## Video



## Demo

You can find a demo of the app deployed on vercel: https://nf-capstone-three.vercel.app/

## Tech Stack

- React
- Next.js
- PubNub
- zustand
- immer
- axios
- Vercel
- Express


## Getting started

- Clone this repository


- Use `.env.example` to create your own `.env` inside the root folder


- Put in the following keys from [PubNub](https://admin.pubnub.com): NEXT_PUBLIC_PUBNUB_PUBLISH_KEY, NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY


- Inside root folder install all dependencies via `$ npm install`


- Run app in development mode via `$ npm run dev`


## Atomic design

We use atomic design. You can read more about our decision in the
[documentation](./docs/ATOMIC_DESIGN.md).

## Behavior Driven Development

We use behavior tests. You can read more about our decision in the
[documentation](./docs/BEHAVIOR_DRIVEN_DEVELOPMENT.md).

## Test Driven Development

We jest to write unit tests. Please look at the Documentation for [Jest](https://jestjs.io/)
and [testing-library](https://testing-library.com/docs/react-testing-library/intro/).

## Commitlint

We use commitlint to ensure conventional commit messages. You can read more about our decision in
the [documentation](./docs/COMMITS.md).


## Commands

**Run the development server:**

```bash
npm run dev
```

**Build:**

```shell
npm run build
```

**Run e2e tests:**

```shell
npm run cypress # local without server
# npm run cypress:run # headless
# npm run test:e2e # with server
```

**Run unit tests:**

```shell
npm run jest
# npm run jest:watch # watch
# npm run test:unit # same as "npm run jest"
```

**Run all tests:**

```shell
npm run test
```

**Run stylelint**

```shell
npm run stylelint
```

**Run eslint**

```shell
npm run eslint
```

**Run all linters**

```shell
npm run lint
```

## Skipping linters

If you need to skip a linter you can add the `--no-verify` flag.

> Warning! We strongly advise against skipping linters.

```shell
# Skipping commitlint
git commit README.md -m "this is a dirty commit" --no-verify
# Skipping linters
git push --no-verify
```
