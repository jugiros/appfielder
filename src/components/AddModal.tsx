import React, { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';

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
          <TextField
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              label="URL"
              variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Agregar
          </Button>
        </Box>
      </Modal>
  );
};

export default AddModal;