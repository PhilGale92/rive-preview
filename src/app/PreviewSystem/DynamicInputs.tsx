import {InputGroup} from "@/app/PreviewSystem/PreviewTypes";
import DynamicInput from "@/app/PreviewSystem/DynamicInput";
import {Dispatch, SetStateAction} from "react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";

export default function DynamicInputs({
  inputItems,
  setInputItems,
} : {
    setInputItems: Dispatch<SetStateAction<InputGroup[]>>;
    inputItems: InputGroup[];
}) {
    return (
        <>
            <Collapsible>
                <CollapsibleTrigger>
                    Dynamic variables
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {inputItems.map((stateItem: InputGroup, existingIndex: number) => {
                        return (
                            <DynamicInput
                                key={existingIndex}
                                setInputItems={setInputItems}
                                existingIndex={existingIndex}
                                inputVal={stateItem.inputVal}
                                inputName={stateItem.inputName}
                            />
                        );
                    })}
                    <Button
                        onClick={(e) => {
                            setInputItems(
                                (prev: InputGroup[]) => {
                                    return [
                                        ...prev,
                                        {
                                            inputName: "",
                                            inputVal: "",
                                        },
                                    ]
                                },
                            );
                            e.stopPropagation();
                            return false;
                        }}
                    >
                        MAKE NEW INPUT GROUP
                    </Button>
                </CollapsibleContent>
            </Collapsible>
        </>
    );
}