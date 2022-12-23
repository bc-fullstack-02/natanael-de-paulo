import { Feed } from '../../components/Feed'
import { Theme } from '../../components/Theme'

export function Home(){
  return (
    <Theme>
      <div className='pt-8 overflow-y-auto'>
        <Feed />
      </div>
    </Theme>
  )
}