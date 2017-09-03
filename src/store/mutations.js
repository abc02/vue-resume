

const mutations = {
    isPreviewNode(state, payload) {
        state.isPreviewNode = !state.isPreviewNode
    },
    setCurrentTab(state, payload) {
        console.log('setCurrentTab', payload)
        state.resume.currentTab = payload
    },
    setCurrentUser(state, payload) {
        console.log('setCurrentUser', payload)
        state.currentUser = payload
    },
    setResume(state, payload) {
        console.log('setResume', payload)
        if (!payload) {
            state.resume = state.defaultResume
            return
        }
        state.resume = payload
    },
    setResumefileId(state, payload) {
        console.log('setResumefileId', payload)
        state.resume.id = payload
    },
    changeUser(state, payload) {
        state.formData.user = payload
    },
    changePass(state, payload) {
        state.formData.pass = payload
    },
    signUpVisible(state, payload) {
        state.formData.signUpVisible = !state.formData.signUpVisible
    },
    logInVisible(state, payload) {
        state.formData.logInVisible = !state.formData.logInVisible
    },
    changeEditor(state, payload) {
        console.log(payload)
        let { $event, a, b, index } = payload
        if (Array.isArray(state.resume[a])) {
            state.resume[a][index][b] = $event
            console.log('array')
        } else {
            state.resume[a][b] = $event
        }
    },
    removeItem(state, payload) {
        let { a, index } = payload
        state.resume[a].splice(index, 1)
    },
    addItem(state, payload) {
        let tmp = state.resume[payload]
        if (!Array.isArray(tmp)) return
        switch (payload) {
            case 'workHistory':
                tmp.push({ company: '', content: '' })
                break;
            case 'projects':
                tmp.push({ name: '', content: '' })
                break;
            case 'school':
                tmp.push({ name: '', major: '' })
                break;
        }
    },
    emptyData(state, payload) {
        let tmp = state.resume[payload]
        if (!Array.isArray(tmp)) {
            console.log('is obj')
            for (let key in tmp) {
                tmp[key] = ''
            }
        } else {
            console.log('is arr')
            tmp.map((obj) => {
                for (let key in obj) {
                    obj[key] = ''
                }
            })
        }
    }
}

export default mutations