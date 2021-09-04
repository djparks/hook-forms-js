import React from "react";

// const ButtonResult = ({ data, reset, setValue }) => {
const ButtonResult = ({ reset }) => {
    return (
        <>

            <button
                className="button buttonBlack"
                type="button"
                onClick={() => {
                    reset({
                        Native: "",
                        TextField: "",
                        Select: "",
                        ReactSelect: { value: "vanilla", label: "Vanilla" },
                        Checkbox: false,
                        switch: false,
                        RadioGroup: "",
                        numberFormat: 123456789,
                        ReactDatepicker: new Date(),
                        MUIPicker: new Date("2020-08-01T00:00:00"),
                        country: { code: "US", label: "United States", phone: "1" },
                        reactMaskInput: ""
                    });
                }}
            >
                Reset Form
            </button>
            <button className="button">submit</button>
        </>
    );
};

export default ButtonResult;