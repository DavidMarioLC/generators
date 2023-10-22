import { Meteors } from "@/components/Meteors";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" overflow-hidden relative py-20 px-4 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]">
      <h1 className="text-gradient text-center font-bold text-2xl md:text-5xl pb-3">
        Generators 𝕏
      </h1>

      <div className="flex flex-col md:flex-row items-center  gap-16 justify-center py-16">
        <Link
          href="/fontsizes"
          className="relative rounded-[30px] overflow-hidden  card bg-[url('../../public/bg-h-fontsize.png')]"
        >
          <p className="text-white absolute z-[2] bottom-4 start-4 text-2xl font-bold">
            Generador de tamaños tipográficos
          </p>
        </Link>
        <Link
          href="/spaces"
          className="relative rounded-[30px] overflow-hidden card bg-[url('../../public/bg-h-spaces.png')]"
        >
          <p className="text-white absolute z-[2] bottom-4 start-4 text-2xl font-bold">
            Generador de margins y paddings
          </p>
        </Link>
      </div>
      <Meteors number={150} />
    </div>
  );
}
