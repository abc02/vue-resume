
class leancloudService {
    static read(currentUser, resume) {
       
    }
    static initdata(resume) {
        console.log('savelocalStorage')
        let localStoragestring = window.localStorage.getItem('state')
        let oldResume = JSON.parse(localStoragestring)
        store.commit({
          type: 'resume',
          resume: oldResume ? oldResume : this.defaultResume
        })
    }
    static updata(resume) {
      
    }

}
export default leancloudService