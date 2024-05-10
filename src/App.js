import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import MainLayout from './layouts/MainLayout'
import SignIn from './components/SignIn'
import { Toaster } from 'sonner'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { pink } from '@mui/material/colors'
const theme = createTheme({
  typography: {
    fontFamily: 'PT Serif',
  },
  palette: {
    primary: {
      main: pink[600],
      light: pink[300],
      dark: pink[900],
    },
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                {' '}
                <Dashboard />
              </MainLayout>
            }
          />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1>NOT FOUND!</h1>} />
        </Routes>
        <Toaster richColors />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
