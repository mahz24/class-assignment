import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { StudentCardProps } from '../interfaces/student.interface';


export default function StudentCard({ student }: StudentCardProps) {
  return (
    <Box sx={{ minWidth: 275, mb: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" sx={{ textAlign: 'left' }}>
            {student.name} {student.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
            {student.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"  startIcon={<EditIcon />}>
            Editar
          </Button>
          <Button size="small"  startIcon={<DeleteIcon />} color="error">
            Eliminar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}