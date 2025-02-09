import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
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
            <Collapsible className="pt-2">
                <CollapsibleTrigger>
                    <h3 className="cursor-pointer scroll-m-20 pb-1 text-2xl font-semibold tracking-tight">
                        General configuration
                    </h3>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="state-mach-name">Rive state machine name</Label>
                        <Input id="state-mach-name" type="text" value={stateMachineName}  onChange={(e) => {
                            setStateMachineName(e.target.value);
                        }}/>
                        <Label htmlFor="responsive-mode">Use responsive mode?</Label>
                        <Input id="responsive-mode" type="checkbox" checked={isUsingResponsiveScale} onChange={() => {
                            setIsUsingResponsiveScale((prev: boolean) => {
                                return !prev;
                            })
                        }}/>
                        <Label htmlFor="comp-width">Component Width</Label>
                        <Input id="comp-width" type="string" value={componentWidth} onChange={(e) => {
                            setComponentWidth(e.target.value);
                        }}/>
                        <Label htmlFor="comp-height">Component Height</Label>
                        <Input id="comp-height" type="string" value={componentHeight} onChange={(e) => {
                            setComponentHeight(e.target.value);
                        }}/>
                        <Label htmlFor="bg-colour">Background colour</Label>
                        <Input id="bg-colour" type="text" value={componentBackgroundColor} onChange={(e) => {
                            setComponentBackgroundColor(e.target.value);
                        }}/>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </>
    )
}