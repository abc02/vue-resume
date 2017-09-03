import leancloudService from 'js/service/leancloudService.js'

const actions = {
    read(context, {currentUser}) {
        return new Promise((resolve, reject) => {
            leancloudService.read(currentUser,resolve, reject)
        })
    }
}

export default actions