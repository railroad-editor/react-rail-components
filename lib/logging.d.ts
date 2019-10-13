export declare type Logger = {
    log?: (...messages: any[]) => void;
};
export declare function setLogger(instance: Logger): void;
export declare function log(...message: any): void;
