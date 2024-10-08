import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { Box, Paper } from "@mui/material"

const HabitList: React.FC = () => {
    const {habits} = useSelector( (state : RootState) => state.habits)
    return (
        <Box sx={{display : "flex", flexDirection : "column", gap:2, mt:4}}>
            {habits.map( (habit) =>{ 
                return( <Paper key={habit.id} elevation={2} sx = {{p:2}} >
                    <Grid>
                        
                    </Grid>
                    
                 </Paper>) 
            })}
        </Box>
    )
}

export default HabitList