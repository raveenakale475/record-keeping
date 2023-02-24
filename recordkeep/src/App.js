import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" color="success">
        Add
      </Button>
      </div>
    </div>
  );
}

export default App;
