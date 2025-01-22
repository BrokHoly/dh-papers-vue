# dh-papers-vue

A basic RpG interface for WarHammer4000 Dark-Heresy.
Fill your datas, roll the dices, and have fun ! <3

The data of a user and his characters are structured like that :

- \<username>.json -> contains the basic data of a user, like his username agein, his id, and a finalHashword. This file should be only available on server side. and never sent to the client. can be updated (but never the client shouldnt be able to change things like the user owner or other critical things.)
- \<username>$<tag>.json/png -> The data of a specific character of the user. contains some basic infos of the user.
- skills\_\<username>$<tag>.json -> for the data about skills of the character. Can be updated

For security, why not saves a the username and the hashword in the cookies, and this hashword is re-hashed on server side to obtain the final hashword that permit the authentication. So no saving of a real password.

@authors
BrokHoly

---

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
