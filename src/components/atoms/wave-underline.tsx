interface WaveUnderlineProps {
  children: React.ReactNode;
}

export default function WaveUnderline({ children }: WaveUnderlineProps) {
  return (
    <div className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <div className="absolute bottom-0 left-0 right-0 h-[25px] bg-[url('/wave-underline.svg')] bg-no-repeat bg-bottom bg-[length:100%_100%] -z-10"></div>
    </div>
  );
}
