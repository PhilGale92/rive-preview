import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Dispatch, SetStateAction} from "react";

export default function Configuration({
    componentBackgroundColor,
    componentHeight,
    stateMachineName,
    componentWidth,
    isUsingResponsiveScale,
    setComponentBackgroundColor,
    setComponentHeight,
    setComponentWidth,
    setIsUsingResponsiveScale,
    setStateMachineName,
} : {
    componentBackgroundColor: string
    componentHeight: string | number
    componentWidth: string | number
    stateMachineName: string
    isUsingResponsiveScale: boolean
    setComponentBackgroundColor: Dispatch<SetStateAction<string>>
    setComponentHeight: Dispatch<SetStateAction<string | number>>
    setComponentWidth: Dispatch<SetStateAction<string | number>>
    setIsUsingResponsiveScale: Dispatch<SetStateAction<boolean>>
    setStateMachineName: Dispatch<SetStateAction<string>>
}) {
    return (
        <>
            <Collapsible>
                <CollapsibleTrigger>
                    General configuration
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="state-mach-name">Rive state machine name</Label>
                        <Input id="state-mach-name" type="text" value={stateMachineName}  onChange={(e) => {
                            setStateMachineName(e.target.value);
                        }}/>
                        <Separator orientation="horizontal" />
                        <Label htmlFor="responsive-mode">Use responsive mode?</Label>
                        <Input id="responsive-mode" type="checkbox" checked={isUsingResponsiveScale} onChange={() => {
                            setIsUsingResponsiveScale((prev: boolean) => {
                                return !prev;
                            })
                        }}/>
                        <Separator orientation="horizontal" />
                        <Label htmlFor="comp-width">Component Width</Label>
                        <Input id="comp-width" type="string" value={componentWidth} onChange={(e) => {
                            if (['auto', 'initial'].includes(e.target.value)) {
                                setComponentWidth(e.target.value);
                            }
                            else {
                                setComponentWidth(parseInt(e.target.value, 10));
                            }
                        }}/>
                        <Label htmlFor="comp-height">Component Height</Label>
                        <Input id="comp-height" type="string" value={componentHeight} onChange={(e) => {
                            if (['auto', 'initial'].includes(e.target.value)) {
                                setComponentHeight(e.target.value);
                            }
                            else {
                                setComponentHeight(parseInt(e.target.value, 10));
                            }
                        }}/>
                        <Separator orientation="horizontal" />
                        <Label htmlFor="bg-colour">Background colour</Label>
                        <Input id="bg-colour" type="color" value={componentBackgroundColor} onChange={(e) => {
                            setComponentBackgroundColor(e.target.value);
                        }}/>
                    </div>
                </CollapsibleContent>
            </Collapsible>
            <Separator orientation="horizontal" />
        </>
    )
}