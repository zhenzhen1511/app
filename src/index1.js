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
            alert("�û������������")
        } else {

            dispatch(GetTeacherAllData(json));
            // if(authority==3){
            //     dispatch(studentType("ѧ�����"))
            // }
            this.saveLocation(username, password, authority, college);
            hashHistory.push("/classManager");
        }
    })
    .catch(err=> {
        localStorage.clear();
        alert("�������쳣")
    });
