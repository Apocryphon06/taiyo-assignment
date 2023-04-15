import { toast } from "react-toastify"

export const showToastMessage = (message: string, type: string) => {
    if (type === 'error') {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
        })
    } 
    else {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
        })
    }
}