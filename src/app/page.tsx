const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const destination = `${basePath}/plano-freelancer/`;

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#111412] px-4 text-white">
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <div className="text-center">
        <p className="text-sm font-black uppercase text-[#d7ff44]">Manual de receita freelancer</p>
        <p className="mt-3 text-sm text-white/60">Abrindo a página principal...</p>
        <a href={destination} className="mt-6 inline-flex h-11 items-center rounded-md bg-[#d7ff44] px-4 text-sm font-black text-[#111412]">
          Continuar
        </a>
      </div>
    </main>
  );
}
