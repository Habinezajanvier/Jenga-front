import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #3E8E7E',
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

export default function TransitionsModal({
  open,
  setOpen,
  children,
  top = 200,
}) {
  const handleClose = () => setOpen(false);
  const [width, setWidth] = React.useState('');

  React.useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              ...style,
              top,
              width: { md: 600, sm: `${width}px` },
            }}
          >
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
