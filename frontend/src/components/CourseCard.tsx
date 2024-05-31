import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CourseCardProps } from '../interfaces/course.interface';


export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Box sx={{ minWidth: 275, mb: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" sx={{ textAlign: 'left' }}>
            {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
            {course.description}
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

