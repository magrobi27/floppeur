import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type CommmentProps = {
    id: string
    comment : string
    commentateur: {
        id : string
        name : string
    }
    
}