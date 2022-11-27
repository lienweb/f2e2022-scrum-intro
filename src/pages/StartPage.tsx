import { Link } from 'react-router-dom'
import logo from '../assets/logo_hole.svg'

function StartPage() {
  return (
    <main className="relative flex flex-col items-center h-bg bg-[url('./assets/landing_bg.svg')] bg-cover">
      <img src={logo} alt="scrum logo" />
      <div className="absolute bottom-0">
        <h1 className='mb-4 text-white font-bold text-3xl'>深入敏捷の村一探究竟</h1>
        <Link to={`intro`} className="btn">進入村莊</Link>
      </div>
    </main>
  )
}

export default StartPage
