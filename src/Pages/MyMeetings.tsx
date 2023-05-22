import React, { useEffect, useState } from 'react'
import { MeetingType } from '../utils/Types'
import { getDocs, query, where } from 'firebase/firestore'
import { meetingRef } from '../utils/FirebaseConfig'
import { useAppSelector } from '../app/hooks'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'
import { EuiBadge, EuiBasicTable, EuiButton, EuiButtonIcon, EuiCopy, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiTable } from '@elastic/eui'
import moment from 'moment'
import { Link } from 'react-router-dom'
import EditFlyout from '../components/EditFlyout'

export default function MyMeetings() {
    useAuth()
    const [meetings, setMeetings] = useState<any>([])
    const userInfo = useAppSelector((zoom) => zoom.auth.userInfo)
    
    const getMyMeetings = async () => {
        const firestoreQuery = query(meetingRef,where("createdBy","==",userInfo?.uid))
        const fetchedMeetings = await getDocs(firestoreQuery)
        if(fetchedMeetings.docs.length) {
            const myMeetings : Array<MeetingType> = [];
            fetchedMeetings.forEach((meeting) => {
                myMeetings.push({
                    docId : meeting.id,
                    ...(meeting.data() as MeetingType)
                })
            })                
            setMeetings(myMeetings)
        }
    }

    useEffect(() => {  
        if(userInfo){
            getMyMeetings();
        }
},[userInfo])

    const [showEditFlyout, setShowEditFlyout] = useState(false)
    const [editMeeting, setEditMeeting] = useState<MeetingType>()

    const onepEditFlyout = (meeting : MeetingType) => {
        setShowEditFlyout(true);
        setEditMeeting(meeting);
    }

    const closeEditFlyout = (dataChanged = false) => {
        setShowEditFlyout(false);
        setEditMeeting(undefined);
        if(dataChanged) getMyMeetings()
    }

    const columns = [
        {
            field : "meetingName",
            name : "Meeting Name"
        },
        {
            field : "meetingType",
            name : "Meeting Type"
        },
        {
            field : "meetingDate",
            name : "Meeting Date"
        },
        {
            field : "",
            name : "Status",
            render : (meeting : MeetingType) => {
                if(meeting.status){
                    if(meeting.meetingDate === moment().format("L")){
                        return (
                            <EuiBadge color='success'>
                                <Link style={{color : "black"}} to={`/join/${meeting.meetingId}`}>
                                    Join Now
                                </Link>
                            </EuiBadge>
                        )
                    } else if (moment(meeting.meetingDate).isBefore(moment().format("L"))) {
                        return <EuiBadge color='default'>Ended</EuiBadge>
                    }
                    else {
                        return <EuiBadge color='primary'>Upcoming</EuiBadge>
                    }
                } else return <EuiBadge color='danger'>Cancelled</EuiBadge>
            }
        },
        {
            field : "",
            name : "Edit",
            render : (meeting:MeetingType) => {
                return <EuiButtonIcon
                    aria-label='metting-edit'
                    iconType="indexEdit"
                    color='danger'
                    display='base'
                    isDisabled={!meeting.status || moment(meeting.meetingDate).isBefore(moment().format("L"))}
                    onClick={() => onepEditFlyout(meeting)}
                />
            }
        },
        {
            field : "meetingId",
            name : "Copy Link",
            render : (meetingId : string) => {
                return (
                    <EuiCopy textToCopy={`${process.env.REACT_APP_HOST}/join/${meetingId}`}>
                        {(copy : any) => (
                            <EuiButtonIcon 
                                iconType="copy"
                                onClick={copy}
                                display='base'
                                aria-label='Meeting Copy'
                            />
                        )}
                    </EuiCopy>
                )
            }
        }
    ]

  return (
    <div
     style={{
        display : "flex",
        height: "100vh",
        flexDirection: "column"
     }}
    >
        <Header/>
        <EuiFlexGroup justifyContent='center' style={{margin : "1rem"}}>
            <EuiFlexItem>
                <EuiPanel>
                    <EuiBasicTable
                      items={meetings}
                      columns={columns}
                    />
                </EuiPanel>
            </EuiFlexItem>
        </EuiFlexGroup>
        {
            showEditFlyout && (<EditFlyout closeFlyout={closeEditFlyout} meetings={editMeeting!}/>)
        }
    </div>
  )
}
