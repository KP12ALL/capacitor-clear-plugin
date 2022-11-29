import { WebPlugin } from '@capacitor/core';

import type { ClearPlugin } from './definitions';

export class ClearWeb extends WebPlugin implements ClearPlugin {
  async clearCache(): Promise<{ value: string }> {
    return {value: 'Clear cache is not implemented on web'};
  }
}
