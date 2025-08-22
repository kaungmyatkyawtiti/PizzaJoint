import { Link } from 'react-router-dom';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="min-w-[800px] text-center my-10 py-10 text-white">
        <h2
          className='text-4xl mb-8'
        >
          Welcome to Pizza Joint
        </h2>
        <Link to="/base">
          <button
            className='text-white px-1 py-3 border-2 border-white mx-4 my-3'>
            Create Your Pizza
          </button>
        </Link>
      </div>

    </div>
  )
}
