import { Globe } from "./ui/globe";

export function GlobeDemo() {
  return (
    <div className="relative flex items-center justify-center max-w-full w-full h-full px-6 py-12 sm:px-8 sm:py-16 md:px-10 md:py-24 lg:px-16 lg:py-32 xl:px-24 xl:py-40 overflow-hidden rounded-lg border bg-gray-600">
      <span className="absolute pointer-events-none text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        cookmypapers available everywhere
      </span>
      <Globe className="top-28 absolute" />
      <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
