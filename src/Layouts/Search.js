import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import MenuItem from "@material-ui/core/MenuItem";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  zipcode: {
    margin: theme.spacing(1),
    paddingTop: 8,
    width: 135
  },
  calenderOptions: {
    width: 138
  },
  languageIcon: {
    paddingTop: 20
  },
  languageDropdown: {
    width: 138
  }
}));

const currencies = [
  {
    value: " All",
    label: " All"
  },
  {
    value: "Hindi",
    label: "Hindi"
  },
  {
    value: "Telugu",
    label: "Telugu"
  },
  {
    value: "Tamil",
    label: "Tamil"
  },
  {
    value: "English",
    label: "English"
  }
];

export default function SeachButton() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [currency, setCurrency] = React.useState("");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div class="searchOuter">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* <Grid container justify="space-around"> */}
        <KeyboardDatePicker
          className={classes.calenderOptions}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          //label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <TextField
          className={classes.zipcode}
          id="input-with-icon-textfield"
          //label="ZipCode"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomRoundedIcon />
              </InputAdornment>
            )
          }}
        />
        <LanguageRoundedIcon className={classes.languageIcon} />
        <TextField
          id="standard-select-currency"
          select
          label=" "
          value={currency}
          onChange={handleChange}
          // helperText="Language"
          className={classes.languageDropdown}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* </Grid> */}
      </MuiPickersUtilsProvider>
    </div>
  );
}
