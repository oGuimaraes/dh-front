import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ButtonDefault from '../Button/ButtonDefault';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    try {
      dispatch(props.functionDelete(props.id));
      props.history.push(props.url);
      setTimeout(function () {
        props.history.go();
      }, 1000);
    } catch {}
  };

  return (
    <div>
      <ButtonDefault
        className="buttonDefault"
        text="Deletar"
        icon="delete"
        secundary
        clickEvent={handleClickOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Deseja realmente deletar {props.name}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Esta ação não poderá ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Voltar
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default withRouter(AlertDialogSlide);
