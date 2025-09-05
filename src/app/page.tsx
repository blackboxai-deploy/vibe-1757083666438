
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://placehold.co/400x400?text=Mehndi+Design+${i + 1}`}
                alt={`Mehndi Design ${i + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
