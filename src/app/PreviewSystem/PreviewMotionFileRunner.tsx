import { Layout, useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";
import { StateMachineInput } from "@rive-app/canvas";

export default function PreviewMotionFileRunner({
                                                    updateInputCallback = (f: any) => {},
                                                    buffer,
                                                    componentBackgroundColor,
                                                    componentHeight,
                                                    componentWidth,
                                                    stateMachineName,
                                                    useResponsiveScale,
                                                }: {
    updateInputCallback?: (inputNames: StateMachineInput[]) => void;
    buffer: ArrayBuffer;
    componentBackgroundColor: string;
    componentHeight: string;
    componentWidth: string;
    stateMachineName: string;
    useResponsiveScale: boolean;
}) {
    const { rive, RiveComponent } = useRive(
        {
            buffer,
            onLoadError: (error) => {
                alert(JSON.stringify(error));
            },
            stateMachines: stateMachineName,
            onStateChange: (state) => {
                if (state && Array.isArray(state.data) && state.data.length > 0) {
                    console.log("Animations completedXXX:", state);
                }
            },
            // This is optional.Provides additional layout control.
            layout: new Layout(),
            autoplay: true,
        },
        {
            fitCanvasToArtboardHeight: useResponsiveScale,
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