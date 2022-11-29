import { registerPlugin } from '@capacitor/core';

import type { ClearPlugin } from './definitions';

const Clear = registerPlugin<ClearPlugin>('Clear', {
  web: () => import('./web').then(m => new m.ClearWeb()),
});

export * from './definitions';
export { Clear };
