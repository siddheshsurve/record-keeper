import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({}); //object state
  const [data, setData] = useState([]); //array{name,email};

  const addData = () => {
    setData([...data, form]);
    setForm(form);
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]); //only new arr values no previous required coz removed
  };

  return (
    <div className="App">
      <Header />

      {/* Form */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(event) => setForm({...form, name: event.target.value })}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) => setForm({...form, email: event.target.value })}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
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
