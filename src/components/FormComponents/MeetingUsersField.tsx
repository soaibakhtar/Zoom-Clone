import { EuiComboBox, EuiFormRow } from '@elastic/eui'
import React from 'react'

export default function MeetingUsersField({
    label,
    options,
    onChange,
    selectedOptions,
    isClearable,
    palceholder,
    singleSelection = false,
    isInvalid,
    error
} : {
    label : string;
    options : any;
    onChange : any;
    selectedOptions : any;
    isClearable : boolean;
    palceholder : string;
    singleSelection? : { asPlainText: boolean } | boolean;
    isInvalid : boolean;
    error : Array<string>;
}) {
  return (
    <EuiFormRow label={label} isInvalid={isInvalid} error={error}>
        <EuiComboBox 
        options={options} 
        onChange={onChange} 
        selectedOptions={selectedOptions} 
        singleSelection={singleSelection} 
        placeholder={palceholder}
        isClearable={isClearable}
        isInvalid={isInvalid}
        />
    </EuiFormRow>
  )
}
