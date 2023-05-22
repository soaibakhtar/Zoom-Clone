import { NavigateFunction } from "react-router-dom";
import { BreadCrumbsType } from "./Types";

export const getCreateMeetingBreadCrumbs = (navigate : NavigateFunction) : Array<BreadCrumbsType> => [
    {
        text : "Dashboard",
        href : "#",
        onClick : () => {
            navigate("/");
        },
    }, 
    {
        text : "Create Meeting"
    }
];


export const OneOnOneMeetingBreadCrumbs = (navigate : NavigateFunction) : Array<BreadCrumbsType> => [
    {
        text : "Dashboard",
        href : "#",
        onClick : () => {
            navigate("/");
        },
    },
    {
        text : "Craete Meeting",
        href : "#",
        onClick : () => {
            navigate("/createmeeting");
        },
    },  
    {
        text : "Create One On One Meeting"
    }
];

export const getMyMeetingsBreadCrumbs = (navigate : NavigateFunction) : Array<BreadCrumbsType> => [
    {
        text : "Dashboard",
        href : "#",
        onClick : () => {
            navigate("/");
        },
    }, 
    {
        text : "My Meetings"
    }
];
export const getVideoConferenceBreadCrumbs = (navigate : NavigateFunction) : Array<BreadCrumbsType> => [
    {
        text : "Dashboard",
        href : "#",
        onClick : () => {
            navigate("/");
        },
    },
    {
        text : "Craete Meeting",
        href : "#",
        onClick : () => {
            navigate("/createmeeting");
        },
    },  
    {
        text : "Video Conference"
    }
];


export const getMeetingsBreadCrumbs = (navigate : NavigateFunction) : Array<BreadCrumbsType> => [
    {
        text : "Dashboard",
        href : "#",
        onClick : () => {
            navigate("/");
        },
    }, 
    {
        text : "Meetings"
    }
];