
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { getTeachers } from "../redux";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TeacherCard from "../components/TeacherCard";

export default function Teachers() {

  const dispatch: AppDispatch = useDispatch();
  const teachers = useSelector((state: RootState) => state.data.teachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch])
  return (
    <Box className='Teachers'>
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
            PROFESORES
        </Typography>
        <Button size="small" startIcon={<AddIcon />} color="primary">
            Crear
        </Button>
      </Box>
      <Box
      width={Infinity}
      height={Infinity}
      my={4}
      display={'flex'}
      flexWrap={'wrap'}
>
      <List sx={{display: 'flex', flexDirection:'row'}}>
        {teachers.map(teacher => (
          <ListItem>
            <TeacherCard teacher={teacher} key={teacher.id}/>
          </ListItem>
        ))}
      </List>
      
    </Box>
    </Box>
  )
}