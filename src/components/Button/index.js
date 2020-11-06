import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

import { changeView } from '../../store/modules/view/actions';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    fontSize: '12px',
    width: '130px',
    backgroundColor: '#0f6171',
    '&:hover': {
      backgroundColor: '#0c515e',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonMode(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  function handleClick(mode) {
    console.log(mode);
    if (mode === 'table') dispatch(changeView('table'));
    else if (mode === 'form') dispatch(changeView('form'));
    else if (mode === 'view') dispatch(changeView('view'));
  }

  let icon = null;

  if (props.icon === 'right') icon = <KeyboardArrowRightIcon />;
  else if (props.icon === 'left') icon = <KeyboardArrowLeftIcon />;
  else if (props.icon === 'add') icon = <AddIcon />;
  else if (props.icon === 'save') icon = <SaveIcon />;
  else if (props.icon === 'delete') icon = <DeleteIcon />;
  else if (props.icon === 'edit') icon = <EditIcon />;

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
        startIcon={icon}
        onClick={() => handleClick(props.linkTo)}
      >
        {props.text}
      </ColorButton>
    </div>
  );
}
