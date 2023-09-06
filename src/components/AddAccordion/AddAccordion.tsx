import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AddAccordion = () => {
  return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6">Título del Accordion</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Subtítulo del Accordion</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <TextField label="Textarea" multiline />
        </AccordionDetails>
        <Typography variant="body1">En línea</Typography>
      </Accordion>
  );
};

export default AddAccordion;