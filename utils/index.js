//Custom hooks from https://www.npmjs.com/package/use-custom-hooks
//These hooks are here "locally" cuz next.js cant transpile node_modules libraries. You can still transpile it with another library
// called next-transpile-modules (https://github.com/martpie/next-transpile-modules) but it duplicates reactjs as dependency
export { default as useQueue } from './customHooks/useQueue';
export { default as useToggle } from './customHooks/useToggle';
export { default as useDarkMode } from './customHooks/useDarkMode';
export { default as usePrevious } from './customHooks/usePrevious';
export { default as useDebounce } from './customHooks/useDebounce';
export { default as useMediaQuery } from './customHooks/useMediaQuery';
export { default as useGeoLocation } from './customHooks/useGeoLocation';
export { default as useLocalStorage } from './customHooks/useLocalStorage';
export { default as useMousePosition } from './customHooks/useMousePosition';
export { default as useOfflineStatus } from './customHooks/useOfflineStatus';