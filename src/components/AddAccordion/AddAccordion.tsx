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
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {blue, red} from '@mui/material/colors';
import {UrlItem} from "../../reducers/StateUrlReducer"

interface AddAccordionProps {
  urlItem: UrlItem;
  onDelete: (url: string) => void;
}

const AddAccordion = ({urlItem, onDelete}: AddAccordionProps) => {

  const handleDelete = (url: string) => {
    onDelete(url);
  };

  return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" sx={{ fontSize: { xs: '10px', sm: '14px' } }}><strong>{urlItem.name}</strong></Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" sx={{ fontSize: { xs: '10px', sm: '14px' } }}>{urlItem.url}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3} className="center-vertical"> {/* Centra verticalmente */}
            <FiberManualRecordIcon className={urlItem.state ? 'img-verify' : 'img-verify-error'} />
            <Typography className={'txt-verify'}>
              {urlItem.state ? 'EN LÍNEA' : 'DESCONECTADO'}
            </Typography>
            <Tooltip title="Eliminar">
              <IconButton size="small" onClick={() => handleDelete(urlItem.url)} style={{ color: red[500] }}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <p>{urlItem.data}</p>
        </AccordionDetails>
      </Accordion>
  );
};

export default AddAccordion;