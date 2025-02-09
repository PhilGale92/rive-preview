'use client';

import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import {useCallback, useContext, useEffect, useState} from "react";

import PreviewError from './PreviewError';
import FileInput from './UserInputs/FileInput';
import {InputGroup, RiveInput} from "./PreviewTypes";
import Configuration from "@/app/PreviewSystem/UserInputs/Configuration";
import DynamicInputs from "@/app/PreviewSystem/UserInputs/DynamicInputs";
import PostFileSelectedWidget from "@/app/PreviewSystem/PostFileSelectedWidget/PostFileSelectedWidget";
import {useHasChanged} from "@/app/PreviewSystem/hooks/useHasChanged";
import {ErrorContext} from "@/app/Errors/ErrorContext";

export default function PreviewSystem() {
    const contextualErrors = useContext(ErrorContext);
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(false);
    const [fileBuffer, setFileBuffer] = useState<ArrayBuffer| null>(null);
    const [fileDetailFingerprint, setFileDetailFingerprint] = useState<string>("");
    const [inputItems, setInputItems] = useState<InputGroup[]>([]);
    const [stateMachineName, setStateMachineName] = useState<string>("State Machine 1");
    const [componentBackgroundColor, setComponentBackgroundColor] =
        useState<string>("transparent");
    const [componentHeight, setComponentHeight] = useState<string | number>("100%");
    const [componentWidth, setComponentWidth] = useState<string | number>("100%");
    const [isUsingResponsiveScale, setIsUsingResponsiveScale] = useState<boolean>(true);
    const [loadInputsFromRive, setLoadInputsFromRive] = useState<boolean>(true);

    const [discoveredInputNames, setDiscoveredInputNames] = useState<string[]>([]);
    const inputItemsHasChanged = useHasChanged(inputItems)
    const fingerprintChanged = useHasChanged(fileDetailFingerprint)

    const updateInputCallback = useCallback(
        (inputs: RiveInput[]) => {
            if (fingerprintChanged) {
                setDiscoveredInputNames(inputs.map((i) => i.name));
                contextualErrors.clearErrors();
                setShowConfetti(true);
            }
            if (inputItemsHasChanged) {
                inputItems.forEach((item) => {
                    const relevantInput = inputs.find((i) => i.name === item.inputName);
                    if (relevantInput) {
                        relevantInput.value = item.inputVal;
                    }
                });
            }
        },
        [inputItems, inputItemsHasChanged, fingerprintChanged, contextualErrors],
    );

    useEffect(() => {
        if (loadInputsFromRive) {
            setInputItems(discoveredInputNames.map((inputName) => {
                return {
                    inputVal: '',
                    inputName
                }
            }));
        }
    }, [discoveredInputNames, loadInputsFromRive]);

    return (
        <>
            {showConfetti && (
                <Confetti
                    key={`confetti-${fileDetailFingerprint}`}
                    recycle={false}
                    onConfettiComplete={() => {
                        setShowConfetti(false);
                    }}
                    width={width}
                    numberOfPieces={1000}
                    height={height}
                />
            )}
            <FileInput
                setFileBuffer={setFileBuffer}
                setFileDetailFingerprint={setFileDetailFingerprint}
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
                loadInputsFromRive={loadInputsFromRive}
                setLoadInputsFromRive={setLoadInputsFromRive}
            />
            {fileDetailFingerprint && fileBuffer && (
                <PostFileSelectedWidget
                    key={fileDetailFingerprint}
                    fileBuffer={fileBuffer}
                    componentBackgroundColor={componentBackgroundColor}
                    stateMachineName={stateMachineName}
                    componentHeight={componentHeight}
                    componentWidth={componentWidth}
                    isUsingResponsiveScale={isUsingResponsiveScale}
                    updateInputCallback={updateInputCallback}
                />
            )}
            <PreviewError />
        </>
    )
}