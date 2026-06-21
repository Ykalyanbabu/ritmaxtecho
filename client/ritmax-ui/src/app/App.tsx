import { RouterProvider } from 'react-router-dom'
import { AllCommunityModule } from 'ag-grid-community'
import { AgGridProvider } from 'ag-grid-react'
import { AuthProvider } from '@/shared/auth/AuthContext'
import { router } from './router'

const agGridModules = [AllCommunityModule]

export function App() {
  return (
    <AgGridProvider modules={agGridModules}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AgGridProvider>
  )
}
