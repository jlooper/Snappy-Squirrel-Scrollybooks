// app/not-found.tsx
export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white p-20 bg-green-800">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl mb-6">Oops! Snappy couldn't find that story.</p>
          <a 
            href="/" 
            className="inline-block bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  }
  