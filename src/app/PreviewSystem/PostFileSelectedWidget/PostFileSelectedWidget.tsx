'use client';

import {Layout, useRive} from "@rive-app/react-canvas";
import {StateMachineInput} from "@rive-app/canvas";
import {Dispatch, SetStateAction, useEffect} from "react";

export default function PostFileSelectedWidget({
    fileBuffer,
    componentBackgroundColor,
    stateMachineName,
    componentHeight,
    componentWidth,
    isUsingResponsiveScale,
    updateInputCallback,
    setErrors,
} : {
    fileBuffer: ArrayBuffer
    componentBackgroundColor: string,
    stateMachineName: string,
    componentHeight: string | number,
    componentWidth: string | number,
    isUsingResponsiveScale: boolean
    updateInputCallback: (inputNames: StateMachineInput[]) => void;
    setErrors: Dispatch<SetStateAction<string[]>>;
}) {
    const { rive, RiveComponent } = useRive(
        {
            buffer: fileBuffer,
            onLoadError: (error) => {
                // TODO - make errors stack
                setErrors([JSON.stringify(error)]);
            },
            stateMachines: stateMachineName,
            onStateChange: (state) => {
                // TODO - display last anims completed
                if (state && Array.isArray(state.data) && state.data.length > 0) {
                    console.log("Animations completedXXX:", state);
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
            <p>Click in the corner of the red box; and you can resize it</p>

            <div
                style={{
                    width: "95%",
                    height: "20rem",
                    backgroundColor: "cyan",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        width: "90%",
                        height: "90%",
                        resize: "both",
                        overflow: "auto",
                        border: "5px solid red",
                        backgroundColor: "white",
                    }}
                >
                    <RiveComponent
                        style={{
                            width: componentWidth,
                            height: componentHeight,
                            backgroundColor: componentBackgroundColor,
                        }}
                    />
                </div>
            </div>
        </>
    );
}