import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  IconButton,
  Tooltip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {blue, red} from '@mui/material/colors';
import {UrlItem} from "../../reducers/StateUrlReducer"

const AddAccordion = ({urlItem}: { urlItem: UrlItem }) => {

  const handleRefresh = () => {
    // Lógica para actualizar
    console.log('Acción de actualización realizada');
  };

  const handleDelete = () => {
    // Lógica para eliminar
    console.log('Acción de eliminación realizada');
  };

  return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6">{urlItem.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{urlItem.url}</Typography>
            </Grid>
          </Grid>
          <FiberManualRecordIcon className={'img-verify'}/>
          <Typography className={'txt-verify'}>
            {urlItem.state ? 'EN LÍNEA' : 'DESCONECTADO'}
          </Typography>
          <Tooltip title="Actualizar">
            <IconButton size="small" onClick={handleRefresh} style={{color: blue[500]}}>
              <RefreshIcon fontSize="small"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar">
            <IconButton size="small" onClick={handleDelete} style={{color: red[500]}}>
              <DeleteIcon fontSize="small"/>
            </IconButton>
          </Tooltip>
        </AccordionSummary>
        <AccordionDetails>
          <p>{urlItem.data}</p>
        </AccordionDetails>
      </Accordion>
  );
};

export default AddAccordion;