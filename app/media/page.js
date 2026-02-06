export default function MediaPage() {
  const videos = [
    "gXjHYdKBrRs",
    "MBvPSjYqoG0",
    "zxb04Vb5hn0",
  ];



  return (
    <main className="max-w-6xl mx-auto px-6 pt-20 pb-24">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-yellow-600">Media</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Video, interviste e contenuti multimediali dedicati al Metodo Gold.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((id, i) => (
          <div
            key={i}
            className="relative w-full overflow-hidden rounded-2xl shadow-md aspect-video bg-black"
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}`}
              title={`YouTube video ${i + 1}`}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export const metadata = {
  title: "Media | Metodo Gold",
  description:
    "Video, interviste, contributi e contenuti multimediali dedicati al Metodo Gold.",
};

