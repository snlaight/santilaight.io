import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
