import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Modal,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ListItem() {
  const [data, fetchdatas] = useState([]);
  const [id, loadId] = useState("");
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = useState("");
  const [updateId, setUpdateId] = useState("");

  // To Fetch data once app is open
  useEffect(() => {
    const fetchData = (async) => {
      try {
        axios({
          method: "GET",
          url: "http://localhost:8000/api/todos/",
          withCredentials: false,
          params: {},
        }).then((res) => fetchdatas(res.data));
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  });

  // Set the paramenters when user clicked update
  const handleOpen = (title, description, id) => {
    setTitle(title);
    setDescription(description);
    setUpdateId(id);
    setOpen(true);
  };

  // To Close the Modal
  const handleClose = () => {
    setOpen(false);
  };

  // PUT request and closing the model
  const handleUpdate = () => {
    const data = {
      title: title,
      description: description,
    };
    console.log(data);
    const url = "http://localhost:8000/api/todos/" + updateId + "/";
    axios.put(url, data);
    setOpen(false);
  };
  const deleteTodo = (id) => {
    loadId(id);
    const url = "http://localhost:8000/api/todos/" + id + "/";
    axios.delete(url).then(() => {
      console.log("Deleted Sucessfully");
    });
  };

  return (
    <div>
      {data.map((data_from_api) => (
        <Card sx={{ mt: 2 }} style={{ backgroundColor: "#A8D5BAFF" }}>
          <CardContent>
            <Typography sx={{ ml: 1 }}> {data_from_api.title} </Typography>
            <Typography sx={{ ml: 1, mt: 1 }}>
              {data_from_api.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              style={{ border: "4px dashed " }}
              onClick={() =>
                handleOpen(
                  data_from_api.title,
                  data_from_api.description,
                  data_from_api.id
                )
              }
            >
              Edit
            </Button>
            <Button
              size="small"
              style={{ border: "4px dashed" }}
              onClick={() => deleteTodo(data_from_api.id)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 600 }}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <Typography sx={{ m: 1 }}>Enter Task</Typography>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ m: 1 }}
            ></TextField>
            <TextField
              fullWidth
              label="Description"
              value={description}
              sx={{ m: 1 }}
              onChange={(e) => setDescription(e.target.value)}
            ></TextField>
          </Box>
          <Button variant="contained" size="small" onClick={handleUpdate}>
            Save{" "}
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={handleClose}
            sx={{ m: 1 }}
          >
            Cancel{" "}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
