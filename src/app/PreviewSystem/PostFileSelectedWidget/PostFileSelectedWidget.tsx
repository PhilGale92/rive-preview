'use client';

import {Layout, useRive} from "@rive-app/react-canvas";
import {StateMachineInput} from "@rive-app/canvas";
import { useContext, useEffect, } from "react";
import { ErrorContext } from '@/app/Errors/ErrorContext';
import { useToast} from "@/hooks/use-toast"
import PreviewDisplayer from "@/app/PreviewSystem/PostFileSelectedWidget/PreviewDisplayer";

export default function PostFileSelectedWidget({
    fileBuffer,
    componentBackgroundColor,
    stateMachineName,
    componentHeight,
    componentWidth,
    isUsingResponsiveScale,
    updateInputCallback,
} : {
    fileBuffer: ArrayBuffer
    componentBackgroundColor: string,
    stateMachineName: string,
    componentHeight: string | number,
    componentWidth: string | number,
    isUsingResponsiveScale: boolean
    updateInputCallback: (inputNames: StateMachineInput[]) => void;
}) {
    const { toast } = useToast()
    const contextualErrors = useContext(ErrorContext);

    const { rive, RiveComponent } = useRive(
        {
            buffer: fileBuffer,
            onLoadError: (error) => {
                contextualErrors.addError(JSON.stringify(error));
            },
            stateMachines: stateMachineName,
            onStateChange: (state) => {
                if (state && Array.isArray(state.data) && state.data.length > 0) {
                    toast({
                        title: "Last played animation(s)",
                        description: state.data,
                    })
                }
            },
            // This is optional.Provides additional layout control.
            layout: new Layout(),
            autoplay: true,
        },
        {
            fitCanvasToArtboardHeight: isUsingResponsiveScale,
        },
    );
    useEffect(() => {
        if (rive) {
            const machineInputs = rive.stateMachineInputs(stateMachineName);
            if (machineInputs) {
                updateInputCallback(machineInputs);
            }
        }
    }, [updateInputCallback, rive, stateMachineName]);

    return (
        <>
            <PreviewDisplayer>
                <RiveComponent
                    style={{
                        width: componentWidth,
                        height: componentHeight,
                        backgroundColor: componentBackgroundColor,
                    }}
                />
            </PreviewDisplayer>
        </>
    );
}