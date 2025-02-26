import {Collapsible, CollapsibleTrigger, CollapsibleContent} from "@/components/ui/collapsible";

export default function Introduction() {
    return (
        <>
            <h1 className="scroll-m-20 pb-5 text-4xl font-extrabold tracking-tight lg:text-5xl">Rive Previewer</h1>
            <Collapsible defaultOpen className="pb-2">
                <CollapsibleTrigger>
                    <h2 className="cursor-pointer mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">What is it?</h2>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <p>While working with Rive; we found a rive file could preview perfectly fine within the Rive app itself.</p>
                    <p>But within a browser it would error due to the Rive runtime not being able to parse a file (due to an animation error or similar).</p>
                    <p className="pb-4">To assist motion people out there I put this little tool together so they can see how the Rive file would act within a browser without needing a developer.</p>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible className="pb-2">
                <CollapsibleTrigger>
                    <h2 className="cursor-pointer mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">How to use?</h2>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <p>First select your Rive with the file picker</p>
                    <p>Then check the General configuration matches what you want (e.g. the background colour is set to transparent, but if you cannot see your animation, then try writing &quot;black&quot;, or &quot;#000&quot; (either works).</p>
                    <p>For dynamic inputs, each time you change the file the app will find all Input names attached to the Rive file, and populate the &quot;Dynamic variables&quot;
                    section. You can either disable this behaviour if you want to add them manually (Using &quot;Make new input group&quot;). Or just leave it in auto mode.</p>
                    <p>Any amends made to input values will affect your rive file immediately.</p>
                    <p className="pb-4">Any error parsing the file will be displayed in a prompt, it also displays the last animations played to assist in troubleshooting.</p>
                </CollapsibleContent>
            </Collapsible>
        </>
    )
}