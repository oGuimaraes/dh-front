import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export default function DatePickers(props) {
  const { dispatchAction, label } = props;
  const classes = useStyles();

  const dateNow = new Date();
  const formatedData = formatDate(dateNow);
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  dispatch(dispatchAction(date));

  return (
    <form className={classes.container} noValidate>
      <TextField
        variant="outlined"
        id="date"
        label={label}
        type="date"
        defaultValue={formatedData}
        onChange={(event) => {
          setDate(event.target.value);
        }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
