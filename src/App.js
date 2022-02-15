
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import UserContextProvider from "./context/UserContext"

import Header from "./components/layout/Header"
import UserList from "./components/homepage/UserList"
import UserDetails from "./components/userDetails/UserDetails"

const App = () => {
  return (
    <UserContextProvider>
      <Router>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/users/:login" element={<UserDetails />} />
            </Routes>
          </main>
      </Router>
    </UserContextProvider>
  )
}
export default App