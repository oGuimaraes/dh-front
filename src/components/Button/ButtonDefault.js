import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const ColorButtonPrimary = withStyles((theme) => ({
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

const ColorButtonSecondary = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    fontSize: '12px',
    width: '130px',
    backgroundColor: '#d30b42',
    '&:hover': {
      backgroundColor: '#b90939',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonDefault(props) {
  const classes = useStyles();
  let icon = null;

  if (props.icon === 'right') icon = <KeyboardArrowRightIcon />;
  else if (props.icon === 'left') icon = <KeyboardArrowLeftIcon />;
  else if (props.icon === 'add') icon = <AddIcon />;
  else if (props.icon === 'save') icon = <SaveIcon />;
  else if (props.icon === 'delete') icon = <DeleteIcon />;
  else if (props.icon === 'edit') icon = <EditIcon />;
  else if (props.icon === 'exit') icon = <ExitToAppIcon />;

  return props.secundary ? (
    <div>
      <ColorButtonSecondary
        variant="contained"
        color="primary"
        className={classes.margin}
        startIcon={icon}
        onClick={() => props.clickEvent()}
      >
        {props.text}
      </ColorButtonSecondary>
    </div>
  ) : (
    <div>
      <ColorButtonPrimary
        variant="contained"
        color="primary"
        className={classes.margin}
        startIcon={icon}
        onClick={() => props.clickEvent()}
      >
        {props.text}
      </ColorButtonPrimary>
    </div>
  );
}
