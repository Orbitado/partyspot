interface WaveUnderlineProps {
  children: React.ReactNode;
}

export default function WaveUnderline({ children }: WaveUnderlineProps) {
  return (
    <div className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <div className="absolute right-0 bottom-0 left-0 -z-10 h-[25px] bg-[url('/wave-underline.svg')] bg-[length:100%_100%] bg-bottom bg-no-repeat"></div>
    </div>
  );
}
