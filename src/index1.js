dispatch(beforeGetTeacherAllData());
console.log(`${this.state.url}/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=${college}`)
fetch(`${this.state.url}/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=${college}`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }

    })
    .then(response => response.json())
    .then(json => {

        if (json.status == 201) {
            localStorage.clear();
            alert("用户名或密码错误")
        } else {

            dispatch(GetTeacherAllData(json));
            // if(authority==3){
            //     dispatch(studentType("学生入口"))
            // }
            this.saveLocation(username, password, authority, college);
            hashHistory.push("/classManager");
        }
    })
    .catch(err=> {
        localStorage.clear();
        alert("服务器异常")
    });
