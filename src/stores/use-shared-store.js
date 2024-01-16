import { getContext, hasContext, setContext } from "svelte";
 
export const useSharedStore = (name, store) => {
    if (hasContext(name)) {
        return getContext(name);
    }
    setContext(name, store);
    return store;
};