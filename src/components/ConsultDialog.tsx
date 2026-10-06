import Close from '@mui/icons-material/Close'
import ArrowForward from '@mui/icons-material/ArrowForward'
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { createContext, useCallback, useContext, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { projectTypes } from '../data'
import { fonts } from '../theme'

type FormState = {
  name: string
  phone: string
  email: string
  projectType: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const emptyForm = (projectType = 'Construction'): FormState => ({
  name: '',
  phone: '',
  email: '',
  projectType,
  message: '',
})

const ConsultContext = createContext<((projectType?: string) => void) | null>(null)

export function useConsult() {
  const openConsult = useContext(ConsultContext)
  if (!openConsult) {
    throw new Error('useConsult must be used within ConsultProvider')
  }
  return openConsult
}

export function ConsultProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<FormState>(emptyForm())
  const [errors, setErrors] = useState<FormErrors>({})
  const [sending, setSending] = useState(false)
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  const openConsult = useCallback((projectType?: string) => {
    const nextType = projectTypes.includes(projectType ?? '')
      ? (projectType as string)
      : 'Construction'
    setForm(emptyForm(nextType))
    setErrors({})
    setSending(false)
    setSubmittedName(null)
    setOpen(true)
  }, [])

  const close = () => {
    if (sending) return
    setOpen(false)
  }

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (form.phone.replace(/\D/g, '').length < 10) next.phone = 'Enter a valid phone number.'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email.'
    }
    if (!form.message.trim()) next.message = 'Tell us a little about the project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    const name = form.name.trim()
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setSubmittedName(name)
    }, 450)
  }

  return (
    <ConsultContext.Provider value={openConsult}>
      {children}
      <Dialog
        open={open}
        onClose={close}
        fullWidth
        maxWidth="sm"
        slotProps={{ paper: { sx: { borderRadius: 3 } } }}
      >
        <DialogTitle
          sx={{ fontFamily: fonts.serif, fontSize: { xs: 28, sm: 34 }, pr: 7, pb: 0.5 }}
        >
          {submittedName ? 'Request received.' : 'Tell us about your space.'}
        </DialogTitle>
        <IconButton
          aria-label="Close consultation form"
          onClick={close}
          sx={{ position: 'absolute', right: 12, top: 12 }}
        >
          <Close />
        </IconButton>
        <DialogContent>
          {submittedName ? (
            <Box sx={{ py: 1 }}>
              <CheckCircleOutlined color="primary" sx={{ fontSize: 42, mb: 1.5 }} />
              <Typography sx={{ color: 'text.secondary', maxWidth: 460, mb: 3 }}>
                Thank you, {submittedName}. A SHUBH ARC coordinator will contact you to fix a
                time for the consultation.
              </Typography>
              <Button variant="contained" onClick={close}>
                Close
              </Button>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Typography sx={{ color: 'text.secondary', mb: 2.5 }}>
                Share a few details and we will set up a consultation.
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Full name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => update('name', event.target.value)}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    fullWidth
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Phone"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) => update('phone', event.target.value)}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    fullWidth
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => update('email', event.target.value)}
                    error={Boolean(errors.email)}
                    helperText={errors.email ?? 'Optional'}
                    fullWidth
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    label="Project type"
                    value={form.projectType}
                    onChange={(event) => update('projectType', event.target.value)}
                    fullWidth
                  >
                    {projectTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="About the project"
                    name="message"
                    value={form.message}
                    onChange={(event) => update('message', event.target.value)}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    fullWidth
                    multiline
                    minRows={4}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  mt: 2.5,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { sm: 'center' },
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  We reply within one business day.
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={sending}
                  endIcon={<ArrowForward />}
                >
                  {sending ? 'Sending…' : 'Request Consultation'}
                </Button>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </ConsultContext.Provider>
  )
}
