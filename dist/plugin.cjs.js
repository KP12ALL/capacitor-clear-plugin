'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Clear = core.registerPlugin('Clear', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ClearWeb()),
});

class ClearWeb extends core.WebPlugin {
    async clearCache() {
        return { value: 'Clear cache is not implemented on web' };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ClearWeb: ClearWeb
});

exports.Clear = Clear;
//# sourceMappingURL=plugin.cjs.js.map
