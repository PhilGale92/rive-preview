import { Dispatch } from "react";
import { InputGroup } from "@/pages/motion/PreviewSystem/previewTypes";

export default function InputItem({
                                      inputVal,
                                      inputName,
                                      existingIndex,
                                      setInputItems,
                                  }: {
    existingIndex: number;
    inputVal: string | number;
    inputName: string;
    setInputItems: Dispatch<InputGroup[]>;
}) {
    return (
        <>
            <div
                style={{
                    backgroundColor: "lightgrey",
                    padding: "1rem",
                }}
            >
                <label>Input Name [{existingIndex}]</label>
                <input
                    type={"text"}
                    value={inputName}
                    onChange={(e) => {
                        // @ts-ignore
                        setInputItems((prev: InputGroup[]) => {
                            const newState = [...prev];
                            newState[existingIndex].inputName = e.target.value;
                            return newState;
                        });
                    }}
                />
                <label>Input Value [{existingIndex}]</label>
                <input
                    type={"text"}
                    value={inputVal}
                    onChange={(e) => {
                        // @ts-ignore
                        setInputItems((prev: InputGroup[]) => {
                            const newState = [...prev];
                            newState[existingIndex].inputVal = e.target.value;
                            return newState;
                        });
                    }}
                />
            </div>
            <hr />
        </>
    );
}