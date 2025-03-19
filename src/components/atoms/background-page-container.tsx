interface BackgroundPageContainerProps {
  children: React.ReactNode;
}

export default function BackgroundPageContainer({
  children
}: BackgroundPageContainerProps) {
  return (
    <div
      className={`container mx-auto grid min-h-screen grid-rows-[150px_1fr_150px] items-center justify-center gap-4 bg-cover bg-center after:absolute after:inset-0 after:-z-50 after:bg-[url('/hero-bg-0.jpg')] after:bg-cover after:bg-center after:opacity-40`}
    >
      {children}
    </div>
  );
}
