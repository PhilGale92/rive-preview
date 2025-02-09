'use client';

import PreviewError from './PreviewError';
import FileInput from './FileInput';
import {useCallback, useState} from "react";
import {InputGroup, RiveInput} from "./PreviewTypes";
import Configuration from "@/app/PreviewSystem/Configuration";
import DynamicInputs from "@/app/PreviewSystem/DynamicInputs";
import PostFileSelectedWidget from "@/app/PreviewSystem/PostFileSelectedWidget/PostFileSelectedWidget";

export default function PreviewSystem() {
    // declare the state at the top of this app
    const [errors, setErrors] = useState<string[]>([]);
    const [fileBuffer, setFileBuffer] = useState<ArrayBuffer| null>(null);
    const [fileDetailFingerprint, setFileDetailFingerprint] = useState<string>("");
    const [inputItems, setInputItems] = useState<InputGroup[]>([
        {
            inputName: "Number 1",
            inputVal: 0,
        },
    ]);
    const [stateMachineName, setStateMachineName] = useState<string>("State Machine 1");
    const [componentBackgroundColor, setComponentBackgroundColor] =
        useState<string>("transparent");
    const [componentHeight, setComponentHeight] = useState<string | number>("100%");
    const [componentWidth, setComponentWidth] = useState<string | number>("100%");
    const [isUsingResponsiveScale, setIsUsingResponsiveScale] = useState<boolean>(true);

    const updateInputCallback = useCallback(
        (inputs: RiveInput[]) => {
            inputItems.forEach((item) => {
                const relevantInput = inputs.find((i) => i.name === item.inputName);
                if (relevantInput) {
                    relevantInput.value = item.inputVal;
                }
            });
        },
        [inputItems],
    );

    return (
        <>
            <FileInput
                setFileBuffer={setFileBuffer}
                setFileDetailFingerprint={setFileDetailFingerprint}
                setErrors={setErrors}
            />
            <Configuration
                componentBackgroundColor={componentBackgroundColor}
                stateMachineName={stateMachineName}
                componentHeight={componentHeight}
                componentWidth={componentWidth}
                isUsingResponsiveScale={isUsingResponsiveScale}
                setStateMachineName={setStateMachineName}
                setComponentBackgroundColor={setComponentBackgroundColor}
                setComponentHeight={setComponentHeight}
                setComponentWidth={setComponentWidth}
                setIsUsingResponsiveScale={setIsUsingResponsiveScale}
            />
            <DynamicInputs
                setInputItems={setInputItems}
                inputItems={inputItems}
            />
            {fileDetailFingerprint && fileBuffer && (
                <PostFileSelectedWidget
                    fileBuffer={fileBuffer}
                    componentBackgroundColor={componentBackgroundColor}
                    stateMachineName={stateMachineName}
                    componentHeight={componentHeight}
                    componentWidth={componentWidth}
                    isUsingResponsiveScale={isUsingResponsiveScale}
                    updateInputCallback={updateInputCallback}
                />
            )}
            <PreviewError errors={errors} />
        </>
    )
}