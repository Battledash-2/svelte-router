# ✈ This is `svroutes`!

⚠ This module is made for Svelte, not SvelteKit.

#### `svroutes` is an extension for Svelte to add SPA applications.

### 🖊 How do I use `svroutes`?

`svroutes` is fairly easy to use.

In your main svelte file (usually `App.svelte`), place a `Router` object. Within the `Router` object, you can place `Route` objects. It works pretty similarly to `react-router`.

### 📩 Installation

To install `svroutes`, run `npm install svroutes`.
Simple as that. Now you can begin using `svroutes`!
<br/>
<br/>

### 🌎 `Router` object usage:

#### `home` (default `'/'`)

Controls the base URL. All `Route` object paths will be `{home}/{route_path}`.
<br/>
<br/>

### 🌍 `Route` object usage:

#### `path` (default `'/'`)

Controls the path for this route. Value will be converted to a RegExp unless the `text` property is present.

Paths can have special parameters using the `:paramsName` syntax. Wildcards can be created using the `.*` syntax.
Read `component` (below) for how to access.

#### `component` (default `null`)

Component to display on screen when the user is on the current `path`.
The component will be created with a `params` and `wildcards` property, meaning you can use

```js
export let params;
export let wildcards;
```

to gain access to them.

If you don't pass in a component and instead decide to place it as a descendant of the `Route` object, you can use `let:params`.

```js
<Route path='/hello/:userName' let:params>
	<h1>Hello, {params.userName}!</h1>
</Route>
```

#### `exact` (default `false`)

Decides whether there should be a '^' prepended and '$' appended to the RegExp. In `text` mode, this property is useless.

#### `text` (default `false`)

Controls whether the `path` property should be a string or RegExp.
In text mode, you cannot use custom options or wildcards. (`:customOption`).

#### `index` (default `false`)

If enabled, `path` is ignored and this route will always show if others fail.
Must be placed **below** all other routes to prevent errors.
<br/>
<br/>

### 🌏 `Link` object usage:

#### `href` or `to` (default `'/'`)

Path to go to. Using `Link` will automatically update the page without need for reload. Using an anchor tag (`a`) will work, but is less optimized.

#### `state` (default `'history.state'`)

State to be passed when switching pages. You can access this via `history.state`.

#### `replace` (default `false`)

Decides whether using the link replace or pushes the state. Push means it _adds_ to the history, while _replace_ replaces the current one. Using replace isn't recommended for most cases because it can ruin the UX.
<br/>
<br/>

### 🚅 `Navigate` object usage:

The navigate object redirects the user to another page using components, rather than script.
<br/>This object uses the same options as the `Link` object.

<br/>

### ⛳ Navigation via Code

To navigate between pages, you can use the `navigate` function.

```ts
import { navigate } from 'svroutes';
navigate(url: string, state?: any, replace?: false);
```

## Enjoy using `svroutes`! Report any bugs [here](https://github.com/Battledash-2/svelte-router#readme).
