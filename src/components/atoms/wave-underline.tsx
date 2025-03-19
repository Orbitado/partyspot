interface WaveUnderlineProps {
  children: React.ReactNode;
}

export default function WaveUnderline({ children }: WaveUnderlineProps) {
  return (
    <span className="relative inline-block">
      {children}
      <span
        className="absolute right-0 bottom-0 left-0 -z-10 h-[25px] bg-[url('/wave-underline.svg')] bg-[length:100%_100%] bg-bottom bg-no-repeat"
        aria-hidden="true"
        role="presentation"
      ></span>
    </span>
  );
}
