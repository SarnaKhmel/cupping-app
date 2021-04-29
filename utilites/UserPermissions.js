import Constans from 'expo-constants'
import * as Permissions from 'expo-permissions'

class userPermissions {
    getCameraPermissions = async() => {
        if (Constans.platform.android){
            const {status} = await Permissions.askAsync(Permissions.CAMERA)
        }
        if (Constans.platform.ios){
            const {status} = await Permissions.askAsync(Permissions.CAMERA)
        }

        if (status != "granted") {
            alert("We need permission to use your camera roll")
        }
    }
}

export default new userPermissions();