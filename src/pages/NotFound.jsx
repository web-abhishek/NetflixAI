import { Link } from 'react-router-dom'

const NotFound = () => (
  <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="text-lg mb-6">The page you are looking for does not exist.</p>
    <Link
      to="/home"
      className="rounded-full bg-red-600 px-5 py-3 text-white transition hover:bg-red-500"
    >
      Back to Home
    </Link>
  </main>
)

export default NotFound
