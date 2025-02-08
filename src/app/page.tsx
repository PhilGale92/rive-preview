import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { Button  } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {Separator} from "@/components/ui/separator";


export default function Home() {
  return (
      <main>
          <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                  You can add components and dependencies to your app using the cli.
              </AlertDescription>
          </Alert>
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">destructive</Button>
          <Input type="number" placeholder="51"  />
          <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
          </div>
          <Progress value={33} />
          <Collapsible>
              <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
              <CollapsibleContent>
                  Yes. Free to use for personal and commercial projects. No attribution
                  required.
                  <div className="flex h-5 items-center space-x-4 text-sm">
                      <div>Blog</div>
                      <Separator orientation="vertical" />
                      <div>Docs</div>
                      <Separator orientation="vertical" />
                      <div>Source</div>
                  </div>
              </CollapsibleContent>
          </Collapsible>
      </main>
  );
}
