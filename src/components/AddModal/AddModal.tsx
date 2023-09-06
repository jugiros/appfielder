import React, { useState } from 'react';
import { Box, Button, Grid, Modal, TextField } from '@mui/material';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (url: string) => void;
}

const AddModal: React.FC<ModalProps> = ({ open, onClose, onAdd }) => {
  const [url, setUrl] = useState('');

  const handleAdd = () => {
    onAdd(url);
    setUrl('');
    onClose();
  };

  return (
      <Modal open={open} onClose={onClose}>
        <Box className={"modal-add"}>
          <h2>Ingresa la URL</h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  label="URL"
                  variant="outlined"
                  fullWidth
              />
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Button variant="contained" color="primary" onClick={handleAdd}>
                Agregar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
  );
};

export default AddModal;