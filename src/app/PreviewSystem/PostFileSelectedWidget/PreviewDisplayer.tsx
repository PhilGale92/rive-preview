import {ReactNode} from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PreviewDisplayer({
     children,
} : {
    children: ReactNode
}) {
    return (
        <ScrollArea className="w-[98%] rounded-md border p-4">
            {children}
        </ScrollArea>
    )
}
