import Image from 'next/image'

export default function ContentPage({ title, text, imageUrl }){
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <div className="h-56 md:h-72 w-full bg-cover bg-center" style={{backgroundImage: `url(${imageUrl || 'https://source.unsplash.com/1200x600/?health,clinic'})`}} />
        <div className="p-6 bg-white">
          <h2 className="text-2xl font-bold text-yellow-600">{title}</h2>
          <p className="mt-4 text-gray-700">{text}</p>
          <a href="#" className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl shadow-lg">Prenota una consulenza</a>
        </div>
      </div>
    </div>
  )
}
