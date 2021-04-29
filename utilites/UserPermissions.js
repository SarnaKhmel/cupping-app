import Constans from 'expo-constants'
import * as Permissions from 'expo-permissions'

class userPermissions {
    getCameraPermissions = async() => {
        if (Constans.platform.io){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        }
    }
}