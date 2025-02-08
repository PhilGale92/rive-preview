import PreviewSystem from "@/app/PreviewSystemLegacy/PreviewSystem";
import PreviewSystemLegacy from "@/app/PreviewSystemLegacy/PreviewSystemLegacy";
import Tester from "@/app/tester/tester";

export default function Home() {
  return (
      <main>
          <PreviewSystem />
          <PreviewSystemLegacy />
          <Tester />
      </main>
  );
}
