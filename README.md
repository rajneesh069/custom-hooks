## Custom Hooks

This repo aims to dive deep into the applications of custom hooks and how they make the code clean and more readable.

#### Make sure that the backend(used in the auto refresh hook) is active at : `https://dummy-server-for-react-js-lazy-loading.onrender.com`

### 1. `useAutoRefresh` hook :

This hook demonstrates the concept of polling(by using `useEffect`, `useState`, `setInterval` and `axios` internally) to get dynamic data and separation of concerns by creating a hook and importing it into the main file which gives `loading`, `error`, `data` so that it could be used in suitable cases for UI rendering and ultimately making the code more readable and clean.

### 2. `useInterval` hook :

This hook takes a `function` and a `number` as inputs and executes the said `function` at the given intervals.

### 3. `useIsOnline` hook :

Using the `window.navigator.onLine` functionality, we check if the user is connected to Internet or not, and display the current status.

### 4. `useMousePosition` hook :

This hook uses the `mousemove` event and attaches it to the window object and then we use the `event.clientX` and `event.clientY` properties given by the `event` object to get the position of the mouse on the screen and display it on the screen.

### 5. `useDebounce` hook :

This hook is used to basically `reduce the number of API calls` or `reduce the number of operations which include the server` by updating the inputs after the user stops typing or stops giving an input and then registering it and acting on it rather acting on the input whenever it changes as that could lead to `un-necessary API calls` or `expensive computation on the server`.
