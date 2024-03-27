import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Alert, AlertTitle, Avatar, AvatarGroup, Backdrop, Badge, Button,ButtonGroup, Checkbox, Chip, CircularProgress, Dialog, DialogActions, DialogContentText, DialogTitle, Fab, FormControlLabel, FormGroup, InputLabel, LinearProgress, Menu, MenuItem, MenuList, Pagination, Radio,RadioGroup, Select, Skeleton, Slider, Snackbar, Switch, TextField, ToggleButton, ToggleButtonGroup, Tooltip, Typography} from "@mui/material";
import DeleteButton from "@mui/icons-material/Delete"
import TickButton from "@mui/icons-material/Add"
function App() {
  const[success,setSuccess]=React.useState("success");
  const[successIcon,setSuccessIcon]=React.useState(true);
  const[fabValue,setFabValue]=React.useState(true);
  const[backDropValue,setBackDropValue]=React.useState(false);
  const[dialogValue,setDialogValue]=React.useState(false);
  const[progress,setProgress]=React.useState(null);
  const[snack,setSnack]=React.useState(false);
  function handleClick(){
    setSuccess((prevData)=>{
      return prevData=='success'?'error':'success';
    });
    setSuccessIcon((prevData)=>{
      return !prevData;
    })
  }
  function progressClick(progress,setProgress){
    console.log(progress)
    if(progress!=null)
    {
      return;
    }
    const interval=setInterval(()=>{
      setProgress((prevData)=>{
        if(prevData==null) return 0;
        if(prevData==100)
        {   
          setProgress(null);
          setDialogValue(true);
          clearInterval(interval);
          return(0);
        }
        else
        {
          return prevData+20;
        }
      })
    },1000);
  }
  return (
    <div>
        <div>
        <div>Buttons</div>
          <Button>MOHIT</Button>
          <Button variant="contained" onClick={()=>{alert('clicked')}}>MOHIT</Button>
          <Button variant="outlined">MOHIT</Button>
          <Button variant="contained" disabled>MOHIT</Button>
          <Button variant="contained" color={success} endIcon={successIcon?<TickButton/>:<DeleteButton/>} onClick={handleClick}>CLICK ME</Button>
          <Button variant="outlined" color='error' startIcon={<DeleteButton/>}>MOHIT</Button>
        </div>
      <div>
        <div>BUTTON GROUP</div>
  <ButtonGroup variant='contained'>
  <Button>FIRST</Button>
  <Button variant='outlined'>SECOND</Button>
  <Button>THIRD</Button>
  </ButtonGroup>
  <ButtonGroup variant='contained' orientation='vertical'>
  <Button>FIRST</Button>
  <Button variant='outlined'>SECOND</Button>
  <Button>THIRD</Button>
  </ButtonGroup>
      </div>
      <div>
        <div>Checkbox with FormGroup and FormControlLabel</div>
        <FormGroup>
   <FormControlLabel required control={<Checkbox/>} label="test1"/>
   <FormControlLabel disabled control={<Checkbox/>} label="test2"/>
   <FormControlLabel control={<Checkbox/>} label="test3"/>

        </FormGroup>
      </div>
      <div>
        <div>Fab</div>
        {<Fab style={{overflow:"hidden"}} variant={fabValue?'extended':'none'}>{fabValue?"Tooooooooo":"To"}</Fab>}
        <Fab onClick={()=>{setFabValue(!fabValue)}} variant='extended'>Toggle Fab</Fab>
      </div>
      <div>
        <div>Radio button with form group</div>
        <FormGroup>
          <FormControlLabel control={<Radio/>} label="NAME"/>
          <FormControlLabel control={<Radio/>} label="CLASS"/>
          <FormControlLabel control={<Radio/>} label="ROLLNO"/>
        </FormGroup>
        <div>Radio button with radio group</div>
        <RadioGroup
        defaultValue="class">
          <FormControlLabel value="name" control={<Radio/>} label="NAME"/>
          <FormControlLabel value="class" control={<Radio/>} label="CLASS"/>
          <FormControlLabel value="rollno" control={<Radio/>} label="ROLLNO"/>
        </RadioGroup>
      </div>
      <div>
        <div>Select</div>
        <InputLabel id="lab">AGE</InputLabel>
        <Select
        labelId='lab'
        variant='outlined'>
          <MenuItem value="first">FIRST</MenuItem>
          <MenuItem value="second">SECOND</MenuItem>
          <MenuItem value="third">THIRD</MenuItem>
        </Select>
      </div>
      <div>
        <div>Slider</div>
        <div>
          <Slider
          valueLabelDisplay='auto'
          min={10}
          max={100}
          />
          <Slider
          valueLabelDisplay='auto'
          defaultValue={90}
          min={10}
          max={100}
          step={10}
          shiftStep={40}
          />
        </div>
      </div>
      <div>
        <div>Switches</div>
        <div>
          <FormGroup>
            <FormControlLabel control={<Switch/>} label="ROBERT"/>
            <FormControlLabel control={<Switch/>} label="WILLIAM"/>
            <FormControlLabel control={<Switch/>} label="JHON"/>
          </FormGroup>
          
        </div>
      </div>
      <div>
        <div>TextField</div>
        <div>
          <TextField variant='filled' label="contained"/>
          <TextField variant='outlined' label="outlined"/>
          <TextField variant='standard' label="text"/>
        </div>
      </div>
      <div>
        <div>Toggle Button</div>
        <div>
        <ToggleButtonGroup
      value="left"
      exclusive
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        A
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        B
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
       C
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        D
      </ToggleButton>
    </ToggleButtonGroup>
        </div>
      </div>
    
      <div>
      <div>AVATAR</div>
        <Avatar alt="Mohit Gujjar" src="https://i.imgflip.com/30b1gx.jpg" sx={{ bgcolor: "blue" }}/>
        <Avatar alt="Remy Sharp" src="https://i.imgflip.com/1ur9b0.jpg" sx={{ bgcolor: "red" }}/>
        <Avatar alt="Travis Howard" src="https://i.imgflip.com/24y43o.jpg" sx={{ bgcolor: "green" }} variant='square'/>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>
      <div>
        <div>Avatar Group</div>
        <AvatarGroup max={5} total={90}>
        <Avatar alt="Mohit Gujjar" src="https://i.imgflip.com/30b1gx.jpg" sx={{ bgcolor: "blue" }}/>
        <Avatar alt="Remy Sharp" src="https://i.imgflip.com/1ur9b0.jpg" sx={{ bgcolor: "red" }}/>
        <Avatar alt="Travis Howard" src="https://i.imgflip.com/24y43o.jpg" sx={{ bgcolor: "green" }} variant='square'/>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </AvatarGroup>
      </div>
      <div>
        <div>Badge</div><br></br>
        <Badge badgeContent={"7"} color='success'>
          <DeleteButton/>
        </Badge><br></br><br></br>
        <Badge badgeContent={"bug"} color='error'>
          <TickButton/>
        </Badge>
      </div>
      <div>
      <div>CHIP</div>
      <div>
        <Chip label="THIS IS"/>
        <Chip label="CHIP" variant='outlined'/>
        <Chip label="CHIP" variant='outlined'   avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}/>
      </div>

      </div>
      <div>
        <div>TOOLTIP</div>
        <Tooltip title="DONT CLICK ME" arrow placement='right'>
          <Button variant='contained'>CLICK ME</Button>
        </Tooltip>
      </div>
    <div>
      <div>Typography</div>
      <div>
        <Typography variant='h1'>
          THIS IS H1
        </Typography>
        <Typography variant='h2'>
          THIS IS H2
        </Typography>
        <Typography variant='h3'>
          THIS IS H3
        </Typography>
      </div>
    </div>
    <div>
      <div>Alert</div>
      <Alert severity='success'>
        <AlertTitle>NOTE</AlertTitle>
        THIS IS TEST
        </Alert>

      <Alert severity='info' variant='filled'>THIS IS TEST</Alert>

      <Alert severity='error' >
        <AlertTitle>NOTE</AlertTitle>
        THIS IS TEST
        </Alert>

      <Alert severity='warning' variant='outlined'>THIS IS TEST</Alert>
    </div>
    <div>
      <div>BackDrop</div>
      <div>
        <Button onClick={()=>setBackDropValue(!backDropValue)}>DISPLAY BACKDROP</Button>
        <Backdrop open={backDropValue} onClick={()=>setBackDropValue(false)}>
          <CircularProgress></CircularProgress>
        </Backdrop>
      </div>
    </div>
    <div>
      <div>Dialog Box</div>
      <div>
        <Button variant='contained' onClick={()=>setDialogValue(true)}>OPEN DIALOG</Button>
        <Dialog
        open={dialogValue}>
          <DialogTitle>WARNING</DialogTitle>
          <DialogContentText>THERE IS A VIRUS IN YOUR PC</DialogContentText>
          <DialogActions>
            <Button onClick={()=>setDialogValue(false)}>YES</Button>
            <Button onClick={()=>setDialogValue(false)}>NO</Button>
  
          </DialogActions>
        </Dialog>
      </div>
    </div>
    <div>
      <div>Progres Bar</div>
      <div>

        <Button onClick={()=>progressClick(progress,setProgress)}>Display Progress Bar</Button><br></br>
        <CircularProgress sx={{color:"red"}}></CircularProgress>
        {progress && <CircularProgress variant='determinate' value={progress} ></CircularProgress>}  

        <LinearProgress color='success'></LinearProgress><br></br><br></br>
        {/* <LinearProgress color='success' variant='buffer'></LinearProgress><br></br><br></br> */}
        {progress && <LinearProgress variant='determinate' value={progress}></LinearProgress>}
    </div>
    </div>
    <div>
      <div>Skelton</div>
      <div>
        <Skeleton variant='circle'  width={40} height={40} ></Skeleton><br></br>
        <Skeleton animation="wave" variant='rectangle'  width={200} ></Skeleton><br></br>
        <Skeleton animation="wave" variant='square'  width={200} height={200}></Skeleton>
      </div>
    </div>
    <div>
      <div>SnackBar</div>
      <div>
      <br></br>
      <Button variant='outlined' onClick={()=>{setSnack(!snack)}}>SHOW SNACKBAR</Button>
        <Snackbar
        open={snack}
        autoHideDuration={6000}
        message="THIS IS AMERICA"
        onClose={()=>{setSnack(!snack)}}/>
      </div>
    </div>
    <div>
      <div>Accordion</div>
      <div>
        <Accordion sx={{backgroundColor:"green",color:"white"}}>
          <AccordionSummary
          expandIcon={<TickButton/>}
          >ACCORDIAN 1</AccordionSummary>
          <AccordionDetails>ehdtopj'hiosadfhsdkfjs;dafhns</AccordionDetails>
        </Accordion>
        <Accordion sx={{backgroundColor:"gray",color:"black"}}>
          <AccordionSummary
          expandIcon={<TickButton/>}
          >ACCORDIAN 1</AccordionSummary>
          <AccordionDetails>ehdtopj'hiosadfhsdkfjs;d</AccordionDetails>
        </Accordion>
        <Accordion sx={{backgroundColor:"blue",color:"white"}}>
          <AccordionSummary
          expandIcon={<TickButton/>}
          >ACCORDIAN 1</AccordionSummary>
          <AccordionDetails>ehdtopj'hiosadfhsdkfjs.</AccordionDetails>
        </Accordion>
      </div>
    </div>
    <div>
      <div>Menu</div>
      <MenuList>
        <MenuItem value={"first"}>FIRST</MenuItem>
        <MenuItem value={"second"}>SECOND</MenuItem>
        <MenuItem value={"third"}>THIRD</MenuItem>
        </MenuList>
    </div>
    <div>
      <div>Pagination</div>
    <div>
      <Pagination
      count={100}
      color="primary"
      />
    </div>
    </div>
    </div>
    )
}

export default App
