interface BackgroundPageContainerProps {
  children: React.ReactNode;
  backgroundUrl?: string;
  rows?: string;
}

export default function BackgroundPageContainer({
  children,
  backgroundUrl = "/hero-bg-0.jpg",
  rows = "150px_1fr_150px",
}: BackgroundPageContainerProps) {
  return (
    <div
      className={`grid grid-rows-[${rows}] min-h-screen container mx-auto items-center justify-center gap-4 bg-cover bg-center after:bg-[url(${backgroundUrl})] after:bg-cover after:bg-center after:absolute after:inset-0 after:-z-50 after:opacity-40`}
    >
      {children}
    </div>
  );
}
