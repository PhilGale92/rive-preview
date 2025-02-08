import PreviewSystem from "@/app/PreviewSystem/PreviewSystem";
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
