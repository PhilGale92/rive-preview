import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Terminal} from "lucide-react";

export default function PreviewError({ errors } : {
    errors: string[]
}) {
    if (errors.length === 0) {
        return null;
    }
    return (
        <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Parse errors:</AlertTitle>
            <AlertDescription>
                <>
                    {errors.map((error) => {
                        return <p key={error}>{error}</p>
                    })}
                </>
            </AlertDescription>
        </Alert>

    )
}