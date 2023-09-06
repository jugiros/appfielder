import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import AddModal from "../components/AddModal/AddModal";
import AddAccordion from "../components/AddAccordion/AddAccordion";
import {Button, Grid, Card, CardContent} from "@mui/material";
import {useSelector} from "react-redux";
import {StateUrlState, AddUrlAction, DeleteUrlAction} from "../reducers/StateUrlReducer"
import {validUrl} from "../utils/functions";

const Home = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const urls = useSelector((state: { stateUrl: StateUrlState }) => state.stateUrl.urls);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAdd = async (url: string, name: string) => {
    try {
      const isValid = await validUrl(url);
      const action: AddUrlAction = {
        type: 'ADD_URL',
        payload: {
          name,
          url,
          state: isValid,
          data: 'Datos de prueba',
        },
      };
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (url: string) => {
    try {
      const action: DeleteUrlAction = {
        type: 'DELETE_URL',
        payload: url,
      };
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div>
        <h2>Nodos</h2>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AddModal open={modalOpen} onClose={handleCloseModal} onAdd={handleAdd}/>
              </Grid>
              {urls && urls.map((url, index) => (
                  <Grid item xs={12} key={index}>
                    <AddAccordion urlItem={url} onDelete={handleDelete}/>
                  </Grid>
              ))}
              <Grid item xs={12} container justifyContent="center">
                <Button variant="contained" color="primary" onClick={handleOpenModal}>Agregar URL</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
  );
};

export default Home;