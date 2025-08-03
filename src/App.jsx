import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ProtectedRoute from './routes/ProtectedRoute';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import CreateBlog from './pages/Blog/CreateBlog';
import EditBlog from './pages/Blog/EditBlog';
import BlogDetails from './pages/Blog/BlogDetails';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/dashboard' element={<ProtectedRoute><MainLayout><Dashboard /></MainLayout></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><MainLayout><Profile /></MainLayout></ProtectedRoute>} />
        <Route path='/create-blog' element={<ProtectedRoute><MainLayout><CreateBlog /></MainLayout></ProtectedRoute>} />
        <Route path='/edit-blog/:id' element={<ProtectedRoute><MainLayout><EditBlog /></MainLayout></ProtectedRoute>} />
        <Route path='/blogs/:id' element={<ProtectedRoute><MainLayout><BlogDetails /></MainLayout></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
