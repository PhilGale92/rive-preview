'use client';

import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function Configuration({
    componentBackgroundColor,
    componentHeight,
    stateMachineState,
    componentWidth,
    isUsingResponsiveScale,
    setComponentBackgroundColor,
    setComponentHeight,
    setComponentWidth,
    setIsUsingResponsiveScale,
    setStateMachineState,
} : {
    componentBackgroundColor: any // TODO
    componentHeight: any // TODO
    componentWidth: any // TODO
    stateMachineState: any // TODO
    isUsingResponsiveScale: any // TODO
    setComponentBackgroundColor: any // TODO
    setComponentHeight: any // TODO
    setComponentWidth: any // TODO
    setIsUsingResponsiveScale: any // TODO
    setStateMachineState: any // TODO
}) {
    return (
        <>
            <Collapsible>
                <CollapsibleTrigger>
                    General configuration
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="responsive-mode">Use responsive mode?</Label>
                        <Input id="responsive-mode" type="text" value={stateMachineState}  onChange={(e) => {
                            setStateMachineState(e.target.value);
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
                        <Input id="comp-width" type="string" checked={componentWidth} onChange={(e) => {
                            if (['auto', 'initial'].includes(e.target.value)) {
                                setComponentWidth(e.target.value);
                            }
                            else {
                                setComponentWidth(parseInt(e.target.value, 10));
                            }
                        }}/>
                        <Label htmlFor="comp-height">Component Height</Label>
                        <Input id="comp-height" type="string" checked={componentHeight} onChange={(e) => {
                            if (['auto', 'initial'].includes(e.target.value)) {
                                setComponentHeight(e.target.value);
                            }
                            else {
                                setComponentHeight(parseInt(e.target.value, 10));
                            }
                        }}/>
                        <Separator orientation="horizontal" />
                        <Label htmlFor="bg-colour">Background colour</Label>
                        <Input id="bg-colour" type="color" checked={componentBackgroundColor} onChange={(e) => {
                            setComponentBackgroundColor(e.target.value);
                        }}/>
                    </div>
                </CollapsibleContent>
            </Collapsible>
            <Separator orientation="horizontal" />
        </>
    )
}