import { TranslateRequest } from '../types';

const DB_NAME = 'ScTranslator';
const DB_VERSION = 1;

export const DB_STORE_COLLECTION = 'collection';

export type StoreCollectionValue = {
    text: string;
    date: number;
    translations: {
        translateRequest: TranslateRequest;
        source: string;
    }[];
    note?: string;
    tags?: string[];
};

const scIndexedDB = (() => {
    let instance: IDBDatabase;

    const getInstance = async (): Promise<IDBDatabase> => {
        if (instance) { return instance; }

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        instance = await new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
            request.onupgradeneeded = () => {
                request.result.createObjectStore(DB_STORE_COLLECTION, { keyPath: 'text' });
            };
        });

        return instance;
    };

    const withStore = async (storeName: string, mode: IDBTransactionMode): Promise<[IDBObjectStore, Promise<void>]> => {
        const instance = await getInstance();
        const transaction = instance.transaction([storeName], mode);

        const done = new Promise<void>((resolve, reject) => {
            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });

        return [transaction.objectStore(storeName), done];
    };

    return {
        get: async <T = any>(storeName: string, query: IDBValidKey | IDBKeyRange): Promise<undefined | T> => {
            const [store, done] = await withStore(storeName, 'readonly');

            let request = store.get(query);

            await done;

            return request.result;
        },
        getAll: async <T = any>(storeName: string): Promise<T[]> => {
            const [store, done] = await withStore(storeName, 'readonly');

            let request = store.getAll();

            await done;

            return request.result;
        },
        add: async <T = any>(storeName: string, value: T, key?: IDBValidKey ) => {
            const [store] = await withStore(storeName, 'readwrite');

            store.put(value, key);
        },
        addAll: async <T = any>(storeName: string, values: T[]) => {
            const [store, done] = await withStore(storeName, 'readwrite');

            values.forEach(value => store.put(value));

            await done;
        },
        delete: async (storeName: string, query: IDBValidKey | IDBKeyRange | (IDBValidKey | IDBKeyRange)[]) => {
            const [store, done] = await withStore(storeName, 'readwrite');

            Array.isArray(query) ? query.forEach((value) => store.delete(value)) : store.delete(query);

            await done;
        }
    }
})();

export default scIndexedDB;