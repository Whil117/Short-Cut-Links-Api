import React from 'react'

export const ShrtLinks = (dataLink) => {
    // setHasLinks(true)
    return (
        <>
            <ol key={dataLink.code}>
                <li><a href={dataLink.code}></a></li>
                {/* <li><a href={}></a></li>
                <li><a href={}></a></li>
                <li><a href={}></a></li> */}
            </ol>
        </>
    )
}
