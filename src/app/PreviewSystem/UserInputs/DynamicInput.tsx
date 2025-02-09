import {Dispatch, SetStateAction} from "react";
import { InputGroup } from "../PreviewTypes";
import {Separator} from "@/components/ui/separator";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export default function DynamicInput({
      inputVal,
      inputName,
      existingIndex,
      setInputItems,
  }: {
    existingIndex: number;
    inputVal: string | number;
    inputName: string;
    setInputItems: Dispatch<SetStateAction<InputGroup[]>>;
}) {
    return (
        <>
            <div>
                <Label htmlFor={`input-namedync-${existingIndex}`}>Input Name [{existingIndex}]</Label>
                <Input id={`input-namedync-${existingIndex}`} value={inputName} type="text" onChange={(e) => {
                    setInputItems((prev: InputGroup[]) => {
                        const newState = [...prev];
                        newState[existingIndex].inputName = e.target.value;
                        return newState;
                    });
                }}/>
                <Label htmlFor={`input-valdync-${existingIndex}`}>Input Value [{existingIndex}]</Label>
                <Input id={`input-valdync-${existingIndex}`} value={inputVal} type="text" onChange={(e) => {
                    setInputItems((prev: InputGroup[]) => {
                        const newState = [...prev];
                        newState[existingIndex].inputVal = e.target.value;
                        return newState;
                    });
                }}/>

            </div>
            <Separator orientation="horizontal" />
        </>
    );
}