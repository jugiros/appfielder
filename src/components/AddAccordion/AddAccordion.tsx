import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AddAccordion = () => {
  return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Título del Accordion</Typography>
          <Typography variant="subtitle1">Subtítulo del Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField label="Textarea" multiline />
        </AccordionDetails>
        <Typography variant="body1">En línea</Typography>
      </Accordion>
  );
};

export default AddAccordion;