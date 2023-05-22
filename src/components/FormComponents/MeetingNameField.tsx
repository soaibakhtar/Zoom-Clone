import React from 'react'
import { EuiFieldText, EuiFormRow } from '@elastic/eui'

export default function MeetingNameField({label, placeholder, value,setMeetingName,isInvalid,error} : {label : string,placeholder: string,value : string,setMeetingName : React.Dispatch<React.SetStateAction<string>>, isInvalid : boolean,error : Array<string>}) {
  return (
    <EuiFormRow label={label} isInvalid={isInvalid} error={error}>
        <EuiFieldText
            placeholder={placeholder} 
            value={value}
            onChange={(e) => setMeetingName(e.target.value)}
            isInvalid={isInvalid}
        />
    </EuiFormRow>
  )
}
