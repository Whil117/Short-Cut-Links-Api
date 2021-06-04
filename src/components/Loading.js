import styled from '@emotion/styled'
import React from 'react'

export const Load = styled.div`
       display: flex;
       justify-content: center;
       margin-top: 20px;
       margin-bottom: 20px;
`

export const Loading = () => {
    return (
        <Load>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" styles="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering:" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
                <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#0b3075" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                </circle>
                <circle cx="50" cy="50" r="23" stroke-width="8" stroke="#105edd" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
                </circle>
            </svg>
        </Load>
    )
}
