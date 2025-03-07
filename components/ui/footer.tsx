export default function Footer() {
    return (
      <div className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-1 max-w-2xl mx-auto">
          Records On The Wall © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    )
  }