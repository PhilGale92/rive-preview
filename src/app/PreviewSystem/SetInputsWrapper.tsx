import InputItem from "./InputItem";
import { InputGroup } from "./previewTypes";
import { Dispatch } from "react";

export default function SetInputsWrapper({
                                             setInputItems,
                                             inputItems,
                                         }: {
    setInputItems: Dispatch<InputGroup[]>;
    inputItems: InputGroup[];
}) {
    return (
        <>
            {inputItems.map((stateItem: InputGroup, existingIndex: number) => {
                return (
                    <InputItem
                        key={existingIndex}
                        setInputItems={setInputItems}
                        existingIndex={existingIndex}
                        inputVal={stateItem.inputVal}
                        inputName={stateItem.inputName}
                    />
                );
            })}
            <div
                style={{
                    fontWeight: "bold",
                    color: "blue",
                    cursor: "pointer",
                    backgroundColor: "yellowgreen",
                    border: "1px solid blue",
                    display: "inline-block",
                    padding: "1rem",
                }}
                onClick={(e) => {
                    setInputItems(
                        // @ts-ignore
                        (prev: InputGroup[]) => {
                            return [
                                ...prev,
                                {
                                    inputName: "",
                                    inputVal: "",
                                },
                            ];
                        },
                    );
                    e.stopPropagation();
                    return false;
                }}
            >
                MAKE NEW INPUT GROUP
            </div>
        </>
    );
}