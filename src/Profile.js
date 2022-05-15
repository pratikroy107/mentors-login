import './profile.css'
import { useAuthValue } from './AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'


function Profile() {
  const { currentUser } = useAuthValue()

  return (
    <div className='center'>
      <div className='profile'>
        <h1>Profile</h1>
        <p><strong>Email: </strong>{currentUser?.email}</p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
        <span onClick={() => signOut(auth)}>Sign Out</span>
        <br></br>
        <a className='discuss' href='https://pratikroy107.github.io/register-for-mentors/' target={'_blank'}>GET YOUR MENTOR</a>
    </div>
      </div >
  )
}
//arijit.dasgupta.fiem.it20@teamfuture.in
//pratikroyje@gmail.com
export default Profile
