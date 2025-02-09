import {Input} from "@/components/ui/input";
import {Dispatch, SetStateAction} from "react";

export default function FileInput({
    setFileBuffer,
    setFileDetailFingerprint,
    setErrors,
} : {
    setFileBuffer: Dispatch<SetStateAction<FileReader | null>>
    setFileDetailFingerprint: Dispatch<SetStateAction<string>>
    setErrors: Dispatch<SetStateAction<string[]>>
}) {
    async function fileLoader(file: File | null) {
        if (!file) {
            setErrors(['No file found']);
            return;
        }
        const loaded = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event && event.target && event.target.result) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const base = event.target.result as any;
                    resolve(base);
                }
            };
            reader.onerror = (err) => {
                reject(err);
            };
            reader.readAsArrayBuffer(file);
        }) as FileReader;
        if (loaded) {
            setFileBuffer(loaded);
            setFileDetailFingerprint(`f-${file.name}-d-${file.lastModified}`);
        }
    }
    return (
        <Input
            type={"file"}
            name={"file-tester"}
            onChange={(e) => {
                if (e && e.target && e.target.files && e?.target?.files?.length > 0) {
                    const files = e.target.files;
                    if (files) {
                       const file = files[0];
                       fileLoader(file);
                    }
                }
            }}
        />
    )
}