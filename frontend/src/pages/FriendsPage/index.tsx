import { Friends } from "../../components/Friends";
import { Theme } from "../../components/Theme";

export function FriendsPage(){
  return (
    <Theme>
      <div className='pt-8 overflow-y-auto'>
        <Friends />
      </div>
    </Theme>
  )
}