import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  TextField,
  InputAdornment,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import LanguageIcon from '@mui/icons-material/Language'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleOpenMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleCloseMenu() {
    setAnchorEl(null)
  }

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
    setAnchorEl(null)
  }
  return (
    <AppBar
      color="inherit"
      elevation={1}
      sx={{ zIndex: theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{ py: '1px', display: 'flex', justifyContent: 'space-between' }}
      >
        <Box
          sx={{
            display: 'flex',
            rowGap: '10px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img src="/logo.12.png" alt="logo" />
          <Typography sx={{ ml: '8px', fontSize: '33px', mr: '42px' }}>
            RAP
          </Typography>
          <IconButton color="primary" size="large" sx={{ mr: '16px' }}>
            <ArrowCircleLeftIcon sx={{ width: 30, height: 30 }} />
          </IconButton>
          <TextField
            placeholder={t('search')}
            size="small"
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <IconButton onClick={handleOpenMenu}>
            <LanguageIcon />
            {i18next.language.toUpperCase()}
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <IconButton>
            <AccountCircleIcon
              onClick={() => {
                navigate('/sign-in')
              }}
            />
          </IconButton>
        </Box>
        <Menu open={open} anchorEl={anchorEl} onClose={handleCloseMenu}>
          <MenuItem value="en" onClick={() => handleChangeLanguage('en')}>
            EN
          </MenuItem>
          <MenuItem value="ru" onClick={() => handleChangeLanguage('ru')}>
            RU
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
