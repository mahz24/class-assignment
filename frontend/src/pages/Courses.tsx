import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { getCourses } from "../redux";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CourseCard from "../components/CourseCard";

export default function Courses() {

  const dispatch: AppDispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.data.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch])
  return (
    <div className='Courses'>
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
            CLASES
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
        {courses.map(course => (
          <ListItem>
            <CourseCard course={course} key={course.id}/>
          </ListItem>
        ))}
      </List>
      
    </Box>
    </div>
  )
}
