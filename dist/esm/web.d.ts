import { WebPlugin } from '@capacitor/core';
import type { ClearPlugin } from './definitions';
export declare class ClearWeb extends WebPlugin implements ClearPlugin {
    clearCache(): Promise<{
        value: string;
    }>;
}
