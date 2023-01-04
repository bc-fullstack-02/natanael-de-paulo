import { Friends } from "../../components/Friends";
import { Text } from "../../components/Text";
import { Theme } from "../../components/Theme";

export function FriendsPage(){
  return (
    <Theme>
      <div className='pt-8 overflow-y-auto'>
        <header className="border-y border-slate-400 pl-4 fixed top-0 w-full">
          <Text asChild={false} size="lg" className="font-extrabold"> Página Inicial </Text>
        </header>
        <Friends />
      </div>
    </Theme>
  )
}