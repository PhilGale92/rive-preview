'use client';
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Terminal} from "lucide-react";

import { ErrorContext } from '@/app/Errors/ErrorContext';
import { useContext } from "react";


export default function PreviewError() {
    const contextualErrors = useContext(ErrorContext);
    if (contextualErrors.errors.length === 0) {
        return null;
    }
    return (
        <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Parse errors:</AlertTitle>
            <AlertDescription>
                <>
                    {contextualErrors.errors.map((error) => {
                        return <p key={error}>{error}</p>
                    })}
                </>
            </AlertDescription>
        </Alert>

    )
}