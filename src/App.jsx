import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import authService from './Appwrite/Auth'
import {useDispatch} from 'react-redux'
import { userLogin,userLogout } from './Store/slice'
import {Header,Footer} from './components/index'
import {Outlet} from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true); // should be boolean, not string "true"
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(userLogin({ userData }));
        } else {
          dispatch(userLogout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-white">
      <div className="w-full block">
        <Header />
        <main>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p>Loading...</p>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App

