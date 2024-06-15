"use client"

import { useEffect, useState } from "react"
import UpdateEvent from "../../../components/update/event/UpdateEvent"

import api from "@/api/api";

export default function UpdateEventPage() {

    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(true)

    const eventId = 7;

    useEffect(() => {

        const fetchEventData = async () => {

            try {

                const response = await api.get(`/event/fetchEvent?id=${eventId}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                setValues(response.data);
                setLoading(false);

                console.log(response.data);
            }
            catch (error) {
                console.log('Error occured in updating event: ', error);
            }
        }

        fetchEventData();
    }, [])

    return (
        !loading ? <UpdateEvent displayType={"EVENT"} values={values} /> : <div>Loading...</div>
    )
}