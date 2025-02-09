import {InputGroup} from "@/app/PreviewSystem/PreviewTypes";
import DynamicInput from "@/app/PreviewSystem/UserInputs/DynamicInput";
import {Dispatch, SetStateAction} from "react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
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
            <Collapsible className="pt-2">
                <CollapsibleTrigger>
                    <h3 className="cursor-pointer scroll-m-20 pb-1 text-2xl font-semibold tracking-tight">
                        Dynamic variables
                    </h3>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <Label htmlFor="auto-discover">Auto discover input names?</Label>
                    <Input id="auto-discover" type="checkbox" checked={loadInputsFromRive} onChange={() => {
                        setLoadInputsFromRive((prev: boolean) => {
                            return !prev;
                        })
                    }}/>
                    <Table className="w-[400px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[300px]">Input Name</TableHead>
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
                        className="mt-5 cursor-pointer"
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