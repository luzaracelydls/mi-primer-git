import Link from 'next/link';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { getStudentBySlug, students } from '@/lib/students';

export function generateStaticParams() {
  return students.map((student) => ({ slug: student.slug }));
}

export default function StudentPage({ params }) {
  const student = getStudentBySlug(params.slug);

  if (!student) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          No existe un alumno con el slug: {params.slug}
        </Alert>
        <Button component={Link} href="/" startIcon={<ArrowBackIcon />}>
          Regresar al directorio
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          mb: 3,
          borderRadius: 4,
          color: '#FFFFFF',
          background: 'linear-gradient(135deg, #5F0F40 0%, #0F4C5C 100%)'
        }}
      >
        <Stack spacing={2}>
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBackIcon />}
            variant="contained"
            color="warning"
            sx={{ width: 'fit-content' }}
          >
            Regresar al directorio
          </Button>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: 'warning.main', color: '#1D1D1D', width: 48, height: 48 }}>
              <PersonOutlineIcon />
            </Avatar>
            <Box>
              <Typography variant="h4" component="h1">
                {student.displayName}
              </Typography>
              <Typography sx={{ opacity: 0.9 }}>Perfil de alumno</Typography>
            </Box>
          </Stack>
          <Chip
            label={`Ruta: /students/${student.slug}`}
            color="warning"
            sx={{ width: 'fit-content', fontWeight: 700 }}
          />
        </Stack>
      </Paper>

      <Card>
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            Contenido migrado desde {student.sourceFile}
          </Typography>
          <Divider sx={{ my: 1.5, borderColor: 'divider' }} />
          <Box
            className="student-content"
            sx={{
              mt: 2,
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              backgroundColor: '#FFF9F3',
              border: '1px solid',
              borderColor: 'divider',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              '& a': {
                color: '#E36414'
              }
            }}
            dangerouslySetInnerHTML={{ __html: student.contentHtml }}
          />
        </CardContent>
      </Card>
    </Container>
  );
}