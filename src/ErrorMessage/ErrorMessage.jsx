
import toast, { Toaster } from "react-hot-toast";

const ErrorMessage = () => {

    return (
        <>
          { toast.error('Error')}
          
                <Toaster></Toaster>
  
        </>
    )
}
export default ErrorMessage;