import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { getStudents } from "../redux";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import StudentCard from "../components/StudentCard";

export default function Students() {

  const dispatch: AppDispatch = useDispatch();
  const students = useSelector((state: RootState) => state.data.students);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch])
  return (
    <div className='Students'>
      <Box
      width={'100%'}
      height={20}
      my={4}
      gap={Infinity}
      p={2}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{marginTop: 8, alignItems: ''}}
      >
        <Typography variant="h5" component="div" sx={{ textAlign: 'left' }}>
            ESTUDIANTES
        </Typography>
        <Button size="small" startIcon={<AddIcon />} color="primary">
            Crear
        </Button>
      </Box>
      <Box
      width={Infinity}
      height={Infinity}
      my={4}
      display="flex"
      alignItems="start"
    >
      <List sx={{display: 'flex', flexDirection:'row'}}>
        {students.map(student => (
          <ListItem>
            <StudentCard student={student} key={student.id}/>
          </ListItem>
        ))}
      </List>
      
    </Box>
    </div>
  )
}