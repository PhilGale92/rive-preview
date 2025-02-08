'use client';

import PreviewError from './PreviewError';
import FileInput from './FileInput';
import { useState } from "react";
import {InputGroup} from "@/app/PreviewSystemLegacy/PreviewTypes";
import Configuration from "@/app/PreviewSystem/Configuration";
import DynamicInputs from "@/app/PreviewSystem/DynamicInputs";

export default function PreviewSystem() {
    // declare the state at the top of this app
    const [errors, setErrors] = useState([]);
    const [fileBuffer, setFileBuffer] = useState(null);
    const [fileDetailFingerprint, setFileDetailFingerprint] = useState("");
    const [inputItems, setInputItems] = useState<InputGroup[]>([
        {
            inputName: "Number 1",
            inputVal: 0,
        },
    ]);
    // TODO -  this is reponsive mode... need good explainer! 'fitCanvasToArtboardHeight' behaviour' ( or is that "responsive mode
    const [stateMachineState, setStateMachineState] = useState("State Machine 1");
    const [componentBackgroundColor, setComponentBackgroundColor] =
        useState("transparent");
    const [componentHeight, setComponentHeight] = useState("100%");
    const [componentWidth, setComponentWidth] = useState("100%");
    const [isUsingResponsiveScale, setIsUsingResponsiveScale] = useState(true);

    return (
        <>
            <FileInput
                setFileBuffer={setFileBuffer}
                setFileDetailFingerprint={setFileDetailFingerprint}
                setErrors={setErrors}
            />
            <Configuration
                componentBackgroundColor={componentBackgroundColor}
                stateMachineState={stateMachineState}
                componentHeight={componentHeight}
                componentWidth={componentWidth}
                isUsingResponsiveScale={isUsingResponsiveScale}
                setStateMachineState={setStateMachineState}
                setComponentBackgroundColor={setComponentBackgroundColor}
                setComponentHeight={setComponentHeight}
                setComponentWidth={setComponentWidth}
                setIsUsingResponsiveScale={setIsUsingResponsiveScale}
            />
            <DynamicInputs
                setInputItems={setInputItems}
                inputItems={inputItems}
            />
            <PreviewError errors={errors} />
        </>
    )
}