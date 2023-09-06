import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Grid,
  IconButton,
  Tooltip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {blue, red} from '@mui/material/colors';

const AddAccordion = () => {
  const handleRefresh = () => {
    // Logic for refreshing
    console.log('Refresh action performed');
  };

  const handleDelete = () => {
    // Logic for deleting
    console.log('Delete action performed');
  };

  return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6">Título del Accordion</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Subtítulo del Accordion</Typography>
            </Grid>
          </Grid>
          <FiberManualRecordIcon className={"img-verify"}/>
          <Typography className={"txt-verify"}>EN LÍNEA</Typography>
          <Tooltip title="Reintentar">
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
          <TextField label="Textarea" multiline/>
        </AccordionDetails>
      </Accordion>
  );
};

export default AddAccordion;