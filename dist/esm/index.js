import {registerPlugin} from '@capacitor/core';

const Clear = registerPlugin('Clear', {
    web: () => import('./web').then(m => new m.ClearWeb()),
});
export * from './definitions';
export { Clear };
//# sourceMappingURL=index.js.map
