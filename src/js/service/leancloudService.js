import AV from 'js/api/av.js';

class leancloudService {
    static read(currentUser,resolve, reject) {
        console.log(currentUser)
        if (!currentUser) {
            console.log('defaultResume')
            return null
        }
        if (currentUser) {
            console.log('query')
            let query = new AV.Query('resumefile')
            query.find()
                .then(resumefile => {
                    let data = resumefile[0]
                    console.log(data)
                    let resume = JSON.parse(data.attributes.resumefile)
                    console.log(resume)
                    resolve (resume)
                }, error => {
                    console.log(error)
                    reject (null)
                })
        }
    }
    static initdata(resume) {
        console.log('initdata', resume.id)
        //转换JSON
        let resumetring = JSON.stringify(resume)

        let Resumefile = AV.Object.extend('resumefile')
        let resumefile = new Resumefile()
        // 设置访问控制
        let acl = new AV.ACL()
        acl.setReadAccess(AV.User.current(), true) // 只有这个 user 能读
        acl.setWriteAccess(AV.User.current(), true) // 只有这个 user 能写
        resumefile.set('resumefile', resumetring);
        resumefile.setACL(acl)

        return resumefile.save()
    }
    static updata(resume) {
        console.log('updata', resume.id)
        var newresumefile = AV.Object.createWithoutData('resumefile', resume.id);
        // 修改属性
        var resumetring = JSON.stringify(resume)
        newresumefile.set('resumefile', resumetring);
        // 保存到云端
        newresumefile.save();
    }

}
export default leancloudService