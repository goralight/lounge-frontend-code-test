<div align="center">
<a href="https://loungeunderwear.com"><img width="1200" src="https://cdn.shopify.com/s/files/1/0929/1494/files/lounge-header.jpg?v=1657202657"/></a>
</div>

# Lounge - React code test

> Lounge's React Design System - Create a component.

## Directory structure

```sh
frontend-code-test/
├── .storybook                  # Storybook config
├── src                         # Build your component work here
│   ├── components/
│   └── styles/
└── ...
```

## Technology stack

- React + TypeScript
- Vite
- Storybook
- Tailwind CSS v4 (CSS-first)
- Vitest + Testing Library
- Oxc (`oxlint`, `oxfmt`)

## Get started

```sh
yarn
yarn dev
```

Storybook runs at `http://localhost:6006`.

## Task

### 1. Set up your CSS

- Use `src/styles/main.css` for Tailwind and component styling.
- Define your button styles using Tailwind utility classes.
- Use component classes for variants/states (BEM style is fine).

### 2. Create a `Button` component

Using the Figma designs, create a reusable button component:

https://www.figma.com/design/XSWZZyQn2R5h0v41z4ntiE/Developer-Task?node-id=1-2617&t=lm9kTwuHmiuxwhXL-1

Minimum requirements:

- Multiple visual variants
- Disabled state
- Loading state
- Optional icon support

### 3. Add tests (Vitest)

Create at least three tests for the button:

- Disabled button does not run click action
- Loading state behavior
- One additional useful behavior of your choice

Run tests with:

```sh
yarn test
```

### 4. Showcase in Storybook

- Use `Button.stories.tsx` to present useful button states and variants.
- Include examples that demonstrate loading, disabled, and icon use-cases.

## Useful commands

```sh
yarn dev
yarn test
yarn lint
yarn format:check
yarn build
yarn build-storybook
```
