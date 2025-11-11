import {Collapsible, CollapsibleTrigger, CollapsibleContent} from "@/components/ui/collapsible";
import Link from "next/link";

export default function Introduction() {
    return (
        <>
        <h1 className="scroll-m-20 pb-5 text-4xl font-extrabold tracking-tight lg:text-5xl">Rive Previewer</h1>
        <Collapsible defaultOpen className="pb-2">
            <CollapsibleTrigger>
                <h2 className="cursor-pointer mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">What
                    is it?</h2>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <p>While working with Rive; we found a rive file could preview perfectly fine within the Rive app
                    itself.</p>
                <p>But within a browser it would error due to the Rive runtime not being able to parse a file (due to an
                    animation error or similar).</p>
                <p className="pb-4">To assist motion people out there I put this little tool together so they can see
                    how the Rive file would act within a browser without needing a developer.</p>
            </CollapsibleContent>
        </Collapsible>
        <Collapsible className="pb-2">
            <CollapsibleTrigger>
                <h2 className="cursor-pointer mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Downloadable
                    example files</h2>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <p>
                    <Link href={'/riv/bugged-riv.riv'}>
                        Download Example file 1 - Bugged Riv file
                    </Link>
                </p>
                    <p>
                        <Link href={'/riv/workingcat.riv'}>
                            Download Example file 2 - Working basic Riv file
                    </Link>
                </p>
                <p>
                    <Link href={'/riv/dynamic-var.riv'}>
                        Download Example file 3 - Working dynamic var riv file
                    </Link>
                </p>
                <p>Thanks to <Link href={"https://www.instagram.com/matte.mov/"} target={'_blank'}><b>Matthew Hooper</b></Link> for the sample files for the Rive previewer.</p>
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
            <Collapsible className="pb-2">
                <CollapsibleTrigger>
                    <h2 className="cursor-pointer mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Example usage</h2>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <h3>Example one: Bugged riv file.</h3>
                    <p>Download the example 1 (bugged riv file), and select it on the file input. It will display the actual rive-preview error. This was not easily findable for the motion designer</p>
                    <p><b>*(seems to have been fixed in newer versions of the Rive library)</b></p>
                    <h3>Example two: Basic riv file</h3>
                    <p>Download the example 2 (Basic working riv file), and select it. It shows the Riv file interacting with your mouse position with 0 dev required.</p>
                    <h3>Example three: Dynamic riv file</h3>
                    <p>Download the example 3 (Dynamic riv file), and select it. Then expand the &#34;Dynamic variables&#34; section.  Search for "Number 1", and change the value to any number between 0 and 100.</p>
                    <p>In this example the number for Number1 could be hooked up to a scroll listener and as you scroll Riv events could fire off just as an example.</p>

                </CollapsibleContent>
            </Collapsible>
        </>
    )
}
