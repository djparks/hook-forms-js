import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Header from "./component/Header";
import ButtonsResult from "./component/ButtonsResult";
import "./css/styles.css";
import {
    Checkbox, createTheme,
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select, Slider, Switch,
    TextField,
    ThemeProvider
} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MuiAutoComplete from "./component/MuiAutoComplete";

let renderCount = 0;

const defaultValues = {
    Native: "",
    TextField: "",
    Select: "",
    ReactSelect: { value: "vanilla", label: "Vanilla" },
    Checkbox: false,
    switch: false,
    RadioGroup: "",
    numberFormat: 123456789,
    downShift: "apple",
    ReactDatepicker: new Date(),
    MUIPicker: new Date("2020-08-01T00:00:00"),
    country: { code: "US", label: "United States", phone: "1" },
    reactMaskInput: ""
};


const theme = createTheme({
    palette: {
        type: "dark"
    }
});

export default function BMaterialUI() {
    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const [data, setData] = useState(null);
    const onSubmit = data => {
        setData(data);
        alert(JSON.stringify(data))
    };

    renderCount++;

    return (
        // <form onSubmit={handleSubmit((data) => setData(data))} className="form">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <Header renderCount={renderCount} />

            <ThemeProvider theme={theme}>
                <div className="container">
                    <section>
                        <label>MUI Picker</label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Controller
                                name="MUIPicker"
                                control={control}
                                render={({ field: { ref, ...rest } }) => (
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        KeyboardButtonProps={{
                                            "aria-label": "change date"
                                        }}
                                        {...rest}
                                    />
                                )}
                            />
                        </MuiPickersUtilsProvider>
                    </section>

                    <section>
                        <label>MUI Checkbox</label>
                        <Controller
                            name="Checkbox"
                            control={control}
                            render={({ field }) => (
                                <Checkbox
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    checked={field.value}
                                />
                            )}
                        />
                    </section>

                    <section>
                        <label>Radio Group</label>
                        <Controller
                            render={({ field }) => (
                                <RadioGroup aria-label="gender" {...field}>
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            )}
                            name="RadioGroup"
                            control={control}
                        />
                    </section>

                    <section>
                        <label>MUI TextField</label>
                        <Controller
                            render={({ field }) => <TextField {...field} />}
                            name="TextField"
                            control={control}
                        />
                    </section>

                    <section>
                        <label>MUI Select</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            )}
                            name="Select"
                            control={control}
                        />
                    </section>

                    <section>
                        <label>MUI Switch</label>
                        <Controller
                            name="switch"
                            control={control}
                            render={({ field }) => (
                                <Switch
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    checked={field.value}
                                />
                            )}
                        />
                    </section>

                    <section>
                        <label>MUI Slider</label>
                        <Controller
                            name="MUI_Slider"
                            control={control}
                            defaultValue={[0, 10]}
                            render={({ field }) => (
                                <Slider
                                    {...field}
                                    onChange={(_, value) => {
                                        field.onChange(value);
                                    }}
                                    valueLabelDisplay="auto"
                                    max={10}
                                    step={1}
                                />
                            )}
                        />
                    </section>

                    <section>
                        <label>MUI autocomplete</label>
                        <MuiAutoComplete control={control} />
                    </section>
                </div>
            </ThemeProvider>


            <hr />

            {/*<ButtonsResult {...{ data, reset, setValue }} />*/}
            <ButtonsResult {...{ reset }} />
        </form>
    );
}
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<BMaterialUI />, rootElement);
