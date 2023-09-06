import React, { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (url: string) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AddModal: React.FC<ModalProps> = ({ open, onClose, onAdd }) => {
  const [url, setUrl] = useState('');

  const handleAdd = () => {
    onAdd(url);
    setUrl('');
    onClose();
  };

  return (
      <Modal open={open} onClose={onClose}>
        <Box sx={{ ...style, width: 400 }}>
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