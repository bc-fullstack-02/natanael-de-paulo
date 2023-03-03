import { useEffect, useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { json } from "react-router-dom"
import { api } from "../../services/api"
import { AuthHeader } from "../../services/authHeader"
import { ProfileProps, UserProps } from "../../services/types"
import { Button } from "../Button"
import { ButtonFollowUnfollow } from "../ButtonFollowUnfollow"
import { Text } from "../Text"




export function Friends(){
  const me = localStorage.getItem('profile');
  const [profiles, setProfiles] = useState<ProfileProps[]>([])
  const authHeader = AuthHeader()
 
  useEffect(() => {
    const getFriends = async () => {
      const response = await api.get('/users/me/myfollowers', authHeader)
      setProfiles(response.data)
    }
    getFriends()
  },[])


  // const getFriends = async () => {
  //   const response = await api.get('/profiles', authHeader)
  //   setProfiles(response.data)
  // }


  const handleFollow = async (profile_id: string) => {
      await api.post(`/profiles/${profile_id}/follow`, null, authHeader)
  }

  // const changeButtonStatus = (profileId: string, buttonDisable: boolean ) => {
  //   setProfiles(profiles => {
  //     const newProfiles = profiles.map(profile => {
  //       if(profile._id === profileId) {
  //         profile.followButtonDisabled = buttonDisable
  //       }

  //       return profile
  //     })

  //     return [...newProfiles]
  //   })
  // }


  return(
    <>
      <ul>
        {profiles.map(profile => (
          <li className="flex items-center" key={profile._id}>
            <div className="flex items-center">
              <AiOutlineUser size={32} className="text-slate-50"/>
              <Text className="font-extrabold">{ profile.name }</Text>
            </div>
            <div>
            <ButtonFollowUnfollow className="py-1 px-1" handleFollow={handleFollow} friend_id={profile._id}/>
              
            
            {/* <Button className="py-1 px-1" onClick={() => handleFollow(friend._id)}>
              Seguir
            </Button> */}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

