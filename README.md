# ✈ This is `svroutes`!

⚠ This module is made for Svelte, not SvelteKit.

#### `svroutes` is an extension for Svelte to add SPA applications.

## 🖊 How do I use `svroutes`?

`svroutes` is fairly easy to use.

In your main svelte file (usually `App.svelte`), place a `Router` object. Within the `Router` object, you can place `Route` objects. It works pretty similarly to `react-router`.

## 📩 Installation

To install `svroutes`, run `npm install svroutes`.
Simple as that. Now you can begin using `svroutes`!

# 🌎 `Router` object usage:

### `home` (default `'/'`)

Controls the base URL. All `Route` object paths will be `{home}/{route_path}`.

# 🌍 `Route` object usage:

## `path` (default `'/'`)

Controls the path for this route. Value will be converted to a RegExp unless the `text` property is present.

Paths can have special options using the `:optionName` syntax.
Read `component` (below) for how to access.

## `component` (default `null`)

Component to display on screen when the user is on the current `path`.
The component will be created with an `options` property, meaning you can use

```js
export let options;
```

to gain access to them.

If you don't pass in a component and instead decide to place it as a descendant of the `Route` object, you can use `let:options={options}`.

```js
<Route path='/hello/:userName' let:options={options}>
	<h1>Hello, {options.userName}!</h1>
</Route>
```

## `exact` (default `false`)

Decides whether there should be a '^' prepended and '$' appended to the RegExp. In `text` mode, this property is useless.

## `text` (default `false`)

Controls whether the `path` property should be a string or RegExp.
In text mode, you cannot use custom options (`:customOption`).

# 🌏 `Link` object usage:

## `href` (default `'/'`)

Path to go to. Using `Link` will automatically update the page without need for reload. Using an anchor tag (`a`) will work, but is less optimized.

## `state` (default `'history.state'`)

State to be passed when switching pages. You can access this via `history.state`.

# Enjoy using `svroutes`! Report any bugs [here](https://github.com/Battledash-2/svelte-router#readme).
