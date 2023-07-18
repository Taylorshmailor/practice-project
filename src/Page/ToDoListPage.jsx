// we're making a todo list page ToDoListPage
// 
// input box (text field)
// save the user's input into a state
// submit button => create a card with what the user typed shown on the card
import React, { useState, useEffect, useMemo } from "react";
import moment from 'moment';
import { styled } from '@mui/system';
import { TextField, Typography, Button, Card } from "@mui/material";
//======================================================
const Root = styled('div')({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})
//======================================================
const StyledCard = styled(Card)({
  height: '200px',
  width:'400px',
  marginBlockEnd: '0.3em',
  backgroundColor: 'Green',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
  
})
//======================================================
const ToDoListCard = (props) => {
  // const { taskName, taskTimeProp, deleteTaskProp } = props
  const thisTaskName = props.taskName
  const taskTime = props.taskTimeProp
  const deleteTask = props.deleteTaskProp
  const currentCount = props.countProp
    return (
      <StyledCard>
        <Typography style={{color: 'white'}}>{thisTaskName}</Typography>
        <p style={{color: 'white'}}>Current count = {currentCount}</p>
        <p style={{color: 'white'}}>{taskTime}</p>
        <Button 
          variant='contained' 
          color='error' 
          onClick={() => deleteTask(thisTaskName)}
        >
          Complete
        </Button>
      </StyledCard>
    )
}
//======================================================
const ToDoListPage = () => {  
    // need a state to hold user data 
    // pass this state through props into a card component 
    const [pendingTask, setPendingTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
      console.log(pendingTask)
    }, [pendingTask])

    // const chartData = useMemo(() => {
    //   // return someChartCalculationFunction()
    // }, [pendingTask])

    const onType = (event) => {
      setPendingTask(event.target.value)
    }

    const saveTask = () => {
      let taskTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      const newTasklist = taskList;
      newTasklist.push(
        {
          taskName: pendingTask, 
          timeStamp: taskTime,
        }
      )

      setTaskList( newTasklist )
      setPendingTask('')  
    }

    const counterFunction = () => {
      let count = counter + 1
      setCounter(count)
    }

    const deleteTask = (nameOfTaskIWantToDelete) => { // 'task1'
      // taskList === [
      //   {taskName: 'task1', timeStamp: 'time1'}, 
      //   {taskName: 'task2', timeStamp: 'time2'},
      // ]

      const modifiedTaskList = taskList.filter((task) => {
        return task.taskName !== nameOfTaskIWantToDelete
      })
      setTaskList(modifiedTaskList)
    }
    
    return ( 
        <Root>
          <Typography 
            variant='h5'
          >
            To do list
          </Typography>
          <TextField 
            label='Enter a task'
            value={pendingTask}
            onChange={(event) => onType(event)}
          /> 
          <Button
              variant='contained'
              onClick={saveTask}
          >
              Submit
          </Button>
          {
              taskList.map((taskObj) => {
                const { taskName, timeStamp } = taskObj
                return (
                <ToDoListCard 
                  taskName={taskName}
                  taskTimeProp={timeStamp}
                  deleteTaskProp={deleteTask}
                  countProp={counter}
                />

                )
              })
          }
          <p>{counter}</p>
          <Button
            variant='contained'
            onClick={counterFunction}
          >
            Counter
          </Button>
          {/* <PracticeComponent
            prop1='test'
            prop2='test2'
            prop3='test3'
            prop4='test4'
            prop5='test5'
          /> */}
        </Root>
    )
}
//======================================================
export default ToDoListPage;

export const PracticeComponent = ( props ) => {
    return (
      <div>test</div>
    )
}

// const sum = (val1, val2) => {
//   return val1 + val2
// }
