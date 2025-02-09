import {InputGroup} from "@/app/PreviewSystem/PreviewTypes";
import DynamicInput from "@/app/PreviewSystem/UserInputs/DynamicInput";
import {Dispatch, SetStateAction} from "react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function DynamicInputs({
  inputItems,
  setInputItems,
  loadInputsFromRive,
  setLoadInputsFromRive,
} : {
    setInputItems: Dispatch<SetStateAction<InputGroup[]>>;
    inputItems: InputGroup[];
    loadInputsFromRive: boolean;
    setLoadInputsFromRive: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <>
            <Collapsible>
                <CollapsibleTrigger>
                    Dynamic variables
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <Label htmlFor="auto-discover">Auto discover input names?</Label>
                    <Input id="auto-discover" type="checkbox" checked={loadInputsFromRive} onChange={() => {
                        setLoadInputsFromRive((prev: boolean) => {
                            return !prev;
                        })
                    }}/>
                    <Separator orientation="horizontal" />
                    <Table className="w-[200px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Input Name</TableHead>
                                <TableHead className="w-[100px]">Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
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
                        </TableBody>
                    </Table>
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