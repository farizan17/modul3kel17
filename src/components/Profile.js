import React, {useEffect} from 'react'
import ShowText from './ShowText'

const Profile = ({profile}) => {
  useEffect(() => {
    alert("profile ditampilkan")
    return () => {
      alert("profile dihapus")
    }
  }, [])
  return (
    <>
    <div>Name: <ShowText text={profile.name}/></div>
        <div>Age: <ShowText text={profile.age}/></div>
        </>
  )
}

export default Profile