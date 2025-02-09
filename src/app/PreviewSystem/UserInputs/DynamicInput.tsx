import {Dispatch, SetStateAction} from "react";
import { InputGroup } from "../PreviewTypes";
import {Input} from "@/components/ui/input";
import {TableRow, TableCell } from "@/components/ui/table";

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
        <TableRow>
            <TableCell className="w-[300px]">
                <Input id={`input-namedync-${existingIndex}`} value={inputName} type="text" onChange={(e) => {
                    setInputItems((prev: InputGroup[]) => {
                        const newState = [...prev];
                        newState[existingIndex].inputName = e.target.value;
                        return newState;
                    });
                }}/>
            </TableCell>
            <TableCell className="w-[100px]">
                <Input id={`input-valdync-${existingIndex}`} value={inputVal} type="text" onChange={(e) => {
                    setInputItems((prev: InputGroup[]) => {
                        const newState = [...prev];
                        newState[existingIndex].inputVal = e.target.value;
                        return newState;
                    });
                }}/>
            </TableCell>
        </TableRow>
    );
}