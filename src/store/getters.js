const getters = {
    profile: state => {
      return state.resume.profile
    },
    workHistory: state =>{
        return state.resume.workHistory
    },
    projects: state =>{
        return state.resume.projects
    },
    school: state =>{
        return state.resume.school
    },
    contact: state =>{
        return state.resume.contact
    }
  }

  export default getters