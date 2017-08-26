import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let userResume = {
    id: null,
    currentTab: 0,
    profile: {
        name: '',
        citry: '',
        birth: ''
    },
    workHistory: [
        { company: '', content: '' },
    ],
    projects: [
        { name: '', content: '' },
    ],
    school: [
        { name: '', major: '' }
    ],
    contact: {
        phone: '',
        wechat: '',
        email: ''
    }
}
let defaultResume = {
    id: null,
    currentTab: 0,
    profile: {
        name: '',
        citry: '',
        birth: ''
    },
    workHistory: [
        { company: '', content: '' },
    ],
    projects: [
        { name: '', content: '' },
    ],
    school: [
        { name: '', major: '' }
    ],
    contact: {
        phone: '',
        wechat: '',
        email: ''
    }
}
export default new Vuex.Store({
    state: {
        isPreviewNode: false,
        currentUser: null,
        resume: userResume,
        defaultResume: defaultResume,
    },
    mutations: {
        initState(state, payload) {
            Object.assign(state, payload)
        },
        isPreviewNode(state, payload) {
            state.isPreviewNode = payload.isPreviewNode
        },
        currentUser(state, payload) {
            state.currentUser = payload.currentUser
        },
        logOut(state, payload) {
            state.currentUser = payload.currentUser
        },
        resume(state, payload) {
            state.resume = payload.resume
        },
        resumeId(state, payload) {
            console.log(payload.resumefileId)
            state.resume.id = payload.resumefileId
            console.log(state.resume)
        }
    }
})
