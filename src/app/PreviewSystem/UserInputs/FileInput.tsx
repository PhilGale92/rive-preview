'use client';

import {Input} from "@/components/ui/input";
import {Dispatch, SetStateAction, useContext} from "react";
import { ErrorContext } from '@/app/Errors/ErrorContext';

export default function FileInput({
    setFileBuffer,
    setFileDetailFingerprint,
} : {
    setFileBuffer: Dispatch<SetStateAction<ArrayBuffer | null>>
    setFileDetailFingerprint: Dispatch<SetStateAction<string>>
}) {
    const contextualErrors = useContext(ErrorContext);
    async function fileLoader(file: File | null) {
        if (!file) {
            contextualErrors.addError('No file found');
            return;
        }
        const loaded = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event && event.target && event.target.result) {
                    const base = event.target.result as ArrayBuffer;
                    resolve(base);
                }
            };
            reader.onerror = (err) => {
                reject(err);
            };
            reader.readAsArrayBuffer(file);
        }) as ArrayBuffer;
        if (loaded) {
            setFileBuffer(loaded);
            setFileDetailFingerprint(`f-${file.name}-d-${file.lastModified}`);
        }
    }
    return (
        <Input
            type={"file"}
            accept=".riv"
            name={"file-tester"}
            onChange={(e) => {
                if (e && e.target && e.target.files && e?.target?.files?.length > 0) {
                    const files = e.target.files;
                    if (files) {
                       const file = files[0];
                       if (file.name.endsWith('.riv')) {
                           fileLoader(file);
                       }
                       else {
                           contextualErrors.addError('File extension must end with .riv');
                       }
                    }
                }
            }}
        />
    )
}