import HeroIconList from "@/src/components/molecules/hero-icon-list";

export default function HeroSection() {
  return (
    <div className="bg-red-500">
      <main className="bg-blue-500">
        <HeroIconList />
        <h1 className="bg-green-500">
          <span className="bg-yellow-500">
            Decí{" "}
            <span className="bg-yellow-500">
              &quot;Si quiero&quot;
            </span>{" "}
            en el lugar de tus sueños.
          </span>
        </h1>
      </main>
    </div>
  );
}
