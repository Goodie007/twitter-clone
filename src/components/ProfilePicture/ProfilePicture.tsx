import React from "react";
import {Image} from 'react-native';


export type ProfilePictureProps = {
    image?: string,
    size?: number,
}


export default function ProfilePicture({image, size=50}: ProfilePictureProps){
    return(
        <Image 
           source={{uri: image}} 
           style={{
              width: size, 
              height: size, 
              borderRadius: size
            }} 
        />
    )
    
}