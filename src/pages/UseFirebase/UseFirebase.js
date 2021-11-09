import { useEffect, useState } from "react"
import initializeAppAuthentication from "./Firebase.init"
import { getAuth,getIdToken, GoogleAuthProvider,updateProfile,signInWithPopup, onAuthStateChanged,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

initializeAppAuthentication()
const useFirebase =()=>{
    const [user, setUser] = useState({})
    const [isLoding, setLoding] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false) 
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history)=>{
      setLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
            const newUser = {email, displayName: name};
            setUser(newUser)
            //save user to the database
            saveUser(email, name, 'POST');
            //send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });
            history.replace('/')
          })
          .catch((error) => {
            setAuthError( error.message);
            // ..
          })
          .finally(()=> setLoding(false))
        
    }

const loginUser = (email, password, location, history)=>{
  setLoding(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination);
      setAuthError('')
    })
    .catch((error) => {
      setAuthError( error.message);
    })
    .finally(()=> setLoding(false))
}

const signInWithGoogle = (location, history) =>{
  setLoding(true);
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT');
    setAuthError('');
    const destination = location?.state?.from || '/';
    history.replace(destination);
  }).catch((error) => {
    setAuthError( error.message);
  })
  .finally(()=> setLoding(false))
}

    //observe user state
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user);
            getIdToken(user)
            .then(idToken =>{
              setToken(idToken)
            })
            } else {
              setUser({})
            }
            setLoding(false)
          });
    return () => unsubscribe;
    },[auth])

  useEffect(()=>{
 fetch(`https://radiant-fjord-01668.herokuapp.com/users/${user.email}`)
 .then(res =>res.json())
 .then(data => setAdmin(data.admin))
  },[user.email])


    const logOut = () =>{
      setLoding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setLoding(false))
    }
    const saveUser = (email, displayName, method) =>{
    const user = {email, displayName};
    fetch('https://radiant-fjord-01668.herokuapp.com/users',{
      method: method,
      headers:{
        'content-type': 'application/json'
      },
     body: JSON.stringify(user)
    })
    .then()
    }

   return{
       user,
       admin,
       token,
       isLoding,
       authError,
       registerUser,
       signInWithGoogle,
       logOut,
       loginUser,
       
   }
}
export default useFirebase;