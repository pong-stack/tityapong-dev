export default function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <div className="inline-flex flex-col items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-500 bg-clip-text text-transparent">
          {text}
        </h1>
        <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-blue-500/80 via-teal-400/80 to-indigo-500/80" />
        <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-500/60 to-indigo-500/60" />
      </div>
    </div>
  );
}
