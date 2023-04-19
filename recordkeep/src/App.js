import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({ form });
  };

  const removeItems = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const handlePress = (event) => {
    if (event.key === "Enter") {
      addData();
    }
    console.log(event.key);
  };

  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* form section */}
        <Stack direction="row" spacing={2}>
          <TextField
            onKeyUp={() => window.alert("up key pressed over here")}
            onKeyPress={(e) => handlePress(e)}
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            onKeyUp={() => window.alert("up key pressed over here")}
            onKeyPress={(e) => handlePress(e)}
            // onPaste={()=>window.alert("Don't paste over here")}
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button draggable onDrag={()=>console.log("Dragged....")} onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* data section */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div kay={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItems(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
