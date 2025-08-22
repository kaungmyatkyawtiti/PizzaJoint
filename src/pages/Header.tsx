import PizzaLogo from '../components/PizzaLogo';

export default function Header() {
  return (
    <header className='flex items-center p-8'>
      <div className="logo">
        <PizzaLogo />
      </div>
      <div className="grow ml-2 text-lg text-white">
        <h1
          className='border-b-1 border-b-white/30 pb-3'
        >Pizza Joint</h1>
      </div>
    </header>
  )
}
