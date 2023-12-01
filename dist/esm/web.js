import { WebPlugin } from '@capacitor/core';
export class ClearWeb extends WebPlugin {
    async clearCache() {
        return { value: 'Clear cache is not implemented on web' };
    }
}
//# sourceMappingURL=web.js.map