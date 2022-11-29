export interface ClearPlugin {
    clearCache(): Promise<{
        value: string;
    }>;
}
