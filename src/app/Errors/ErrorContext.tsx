'use client';

import {ReactNode, createContext, useState, useCallback} from "react";

export const ErrorContext = createContext({
    errors: [] as string[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addError: (e: string) => {},
    clearErrors: () => {},
});

export default function Wrapper({
    children
} : {
    children: ReactNode
}) {
    const [errors, setErrors] = useState<string[]>([]);
    const addError = useCallback((error: string) => {
        setErrors((prev: string[]) => {
            return [
                ...prev,
                error,
            ]
        })
    }, []);
    const clearErrors = useCallback(() => {
        setErrors([])
    }, []);

    return (
        <ErrorContext.Provider value={{
            errors,
            addError,
            clearErrors,
        }}>
            {children}
        </ErrorContext.Provider>
    )
}