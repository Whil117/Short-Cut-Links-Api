import React from 'react'
import { CardInput, CardShortButton, CardShortForm } from '../styles/CardShortFormStyled'

export const ShortForm = ({  submit, change, deleteText }) => {
    return (
        <CardShortForm action="" onSubmit={submit}>
            <label>
                <CardInput three second primary type="url" id="url" required onChange={change} />
                <CardShortButton onClick={deleteText}>
                    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.0022 28.4872L34.099 39.8486C35.2122 40.9972 35.9365 41.009 37.07 39.8486L39.2965 37.5686C40.3872 36.4522 40.4611 35.7193 39.2965 34.5268L27.5482 22.5L39.2975 10.4732C40.3979 9.34287 40.4193 8.58001 39.2975 7.43037L37.0711 5.15144C35.9161 3.96858 35.2025 4.02323 34.1 5.15144L23.0022 16.5129L11.9054 5.15251C10.8029 4.0243 10.0893 3.96965 8.93431 5.15251L6.70788 7.43144C5.58503 8.58108 5.60538 9.34394 6.70788 10.4743L18.4561 22.5L6.70788 34.5268C5.54324 35.7193 5.60538 36.4522 6.70788 37.5686L8.93324 39.8486C10.0572 41.009 10.7815 40.9972 11.9043 39.8486L23.0022 28.4872V28.4872Z" fill="white" />
                    </svg>

                </CardShortButton>
                <CardShortButton primary type="submit">
                    <svg width="46" height="46" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.6944 35.3051L21.7503 43.2492L5.05683 31.8688C4.95824 31.8043 4.86411 31.7308 4.77606 31.6499C3.45971 30.3926 3.63425 28.4333 5.14769 28.0978L45.9373 19.0623L36.9017 59.8518C36.5716 61.3492 34.6507 61.5353 33.3925 60.2663C33.2823 60.1507 33.1854 60.0239 33.1049 59.89L26.4326 49.2753" stroke="white" strokeWidth="4" strokeLinejoin="round" strokeLinejoin="round" />
                    </svg>
                </CardShortButton>
            </label>

        </CardShortForm>
    )
}
