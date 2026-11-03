import Link from 'next/link';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { students } from '@/lib/students';

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          mb: 4,
          borderRadius: 4,
          color: '#FFFFFF',
          background: 'linear-gradient(135deg, #5F0F40 0%, #0F4C5C 100%)'
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h3" component="h1">
            Directorio de Asistencia
          </Typography>
          <Typography sx={{ opacity: 0.9 }}>
            Clase de lunes de Octubre y Noviembre 2026
          </Typography>
          <Chip
            label={`${students.length} alumnos`}
            color="warning"
            sx={{ width: 'fit-content', fontWeight: 700 }}
          />
        </Stack>
      </Paper>

      <Stack spacing={2}>
        {students.map((student) => (
          <Card
            key={student.slug}
            component={Link}
            href={`/students/${student.slug}`}
            sx={{
              textDecoration: 'none',
              bgcolor: 'background.paper',
              transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 6,
                borderColor: 'secondary.main'
              }
            }}
          >
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                      <PersonOutlineIcon sx={{ fontSize: 18 }} />
                    </Avatar>
                    <Typography variant="h6" component="h2">
                      {student.displayName}
                    </Typography>
                  </Stack>
                  <Divider sx={{ my: 1.25, borderColor: 'divider' }} />
                  <Typography variant="body2" color="text.secondary">
                    Archivo original: {student.sourceFile}
                  </Typography>
                </Box>
                <Chip
                  icon={<ArrowForwardIcon />}
                  label="Ver alumno"
                  color="secondary"
                  variant="filled"
                />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}