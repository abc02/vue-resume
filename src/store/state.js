let resume = {
    id: '',
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
    id: '',
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
let formData = {
    logInVisible: false,
    signUpVisible: false,
    user: '',
    pass: '',
}
const state = {
    isPreviewNode: false,
    currentUser: null,
    resume,
    defaultResume,
    formData
}

export default state