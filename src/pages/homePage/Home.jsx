
import { useGetter } from '../../store';

import './home.scss';

export default function Home() {

  const {events} = useGetter();

  console.log(events)

  return (
    <div className="homepage">
      <div className="main_header">
        <h1> Qué hacer en Madrid </h1>
      </div>

    </div>

  )
}
