'use client';

import { useState, useCallback } from "react";
import PreviewMotionFileRunner from "./PreviewMotionFileRunner";
import SetInputsWrapper from "./SetInputsWrapper";
import { InputGroup } from "./PreviewTypes";

export default function Preview() {
    const [fileBuffer, setFileBuffer] = useState(null);
    const [stateMachineState, setStateMachineState] = useState("State Machine 1");
    const [fileDetailFingerprint, setFileDetailFingerprint] = useState("");
    const [isUsingResponsiveScale, setIsUsingResponsiveScale] = useState(true);

    const [componentBackgroundColor, setComponentBackgroundColor] =
        useState("transparent");
    const [componentHeight, setComponentHeight] = useState("100%");
    const [componentWidth, setComponentWidth] = useState("100%");

    const [inputItems, setInputItems] = useState<InputGroup[]>([
        {
            inputName: "Number 1",
            inputVal: 0,
        },
    ]);

    async function fileLoader(file: File | null) {
        if (!file) {
            alert("no file data found");
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

    const updateInputCallback = useCallback(
        (inputs: any[]) => {
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
            <form
                onSubmit={(e) => {
                    e.stopPropagation();
                    return false;
                }}
            >
                <label>State machine name</label>
                <input
                    type={"text"}
                    value={stateMachineState}
                    name={"input-statename"}
                    onChange={(e) => {
                        // @ts-ignore
                        setStateMachineState(e.target.value);
                    }}
                />
                <hr />
                <SetInputsWrapper
                    setInputItems={setInputItems}
                    inputItems={inputItems}
                />
                <hr />
                <label>
                    Check this box to enable &apos;fitCanvasToArtboardHeight&apos;
                    behaviour
                </label>
                <input
                    type="checkbox"
                    checked={isUsingResponsiveScale}
                    onChange={(e) => {
                        setIsUsingResponsiveScale((prev) => !prev);
                    }}
                />
                <hr />
                <label>Component Width</label>
                <input
                    value={componentWidth}
                    name={"input-comp-width"}
                    onChange={(e) => {
                        setComponentWidth(e.target.value);
                    }}
                />
                <hr />
                <label>Component Height</label>
                <input
                    value={componentHeight}
                    name={"input-comp-height"}
                    onChange={(e) => {
                        setComponentHeight(e.target.value);
                    }}
                />
                <hr />
                <label>Component BG colour (#HEX or css colour name)</label>
                <input
                    value={componentBackgroundColor}
                    name={"input-comp-bg-colour"}
                    onChange={(e) => {
                        setComponentBackgroundColor(e.target.value);
                    }}
                />
                <hr />
                <input
                    type={"file"}
                    name={"file-tester"}
                    onChange={(e) => {
                        // @ts-ignore
                        if (e?.target?.files?.length > 0) {
                            const files = e.target.files;
                            if (files) {
                                const file = files[0];
                                fileLoader(file);
                            }
                        }
                    }}
                />
            </form>
            <hr />
            {fileBuffer && (
                <PreviewMotionFileRunner
                    componentWidth={componentWidth}
                    componentHeight={componentHeight}
                    componentBackgroundColor={componentBackgroundColor}
                    stateMachineName={stateMachineState}
                    updateInputCallback={updateInputCallback}
                    buffer={fileBuffer}
                    key={fileDetailFingerprint}
                    useResponsiveScale={isUsingResponsiveScale}
                />
            )}
        </>
    );
}