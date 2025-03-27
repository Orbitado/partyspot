interface WaveUnderlineProps {
  children: React.ReactNode;
}

export default function WaveUnderline({ children }: WaveUnderlineProps) {
  return (
    <span className="relative inline-block">
      {children}
      <span
        className="absolute top-3 right-0 bottom-0 left-0 -z-10 h-full bg-[url('/wave-underline.svg')] bg-[length:100%_100%] bg-bottom bg-no-repeat sm:top-4 md:top-6 lg:top-8"
        aria-hidden="true"
        role="presentation"
      ></span>
    </span>
  );
}
