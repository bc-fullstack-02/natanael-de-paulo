import { AiOutlineUser } from "react-icons/ai"
import { Button } from "../Button"
import { Text } from "../Text"

export function Friends(){

  const friends = [{
    name: 'Fulano',
    following: [],
    followers: []
  }] 

  return(
    <>
      <header className="border-y border-slate-400 pl-4 fixed top-0 w-full">
        <Text asChild={false} size="lg" className="font-extrabold"> Página Inicial </Text>
      </header>

      <ul>
        {friends && friends.map(friend => (
          <li className="flex items-center">
            <div className="flex items-center">
              <AiOutlineUser size={32} className="text-slate-50"/>
              <Text className="font-extrabold">{ friend.name }</Text>
            </div>
            <div>
              <Button className="py-1 px-1">
                Parar de seguir
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}