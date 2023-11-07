import { useState } from "react";
import images from "~/assets/images";



const Image = ({src, alt,  ...props}) => {
    const [fallback, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(images.noImage)
    }

    return <img src={fallback || src} alt={alt} {...props} onError={handleError}/>;
}
export default Image;