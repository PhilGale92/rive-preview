import {Input} from "@/components/ui/input";
import {Dispatch, SetStateAction} from "react";

export default function FileInput({
      setFileBuffer,
      setFileDetailFingerprint,
      setErrors,
} : {
    setFileBuffer: Dispatch<SetStateAction<FileReader>>
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
                // @ts-ignore
                resolve(event.target.result);
            };
            reader.onerror = (err) => {
                reject(err);
            };
            reader.readAsArrayBuffer(file);
        });
        if (loaded) {
            // @ts-ignore
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