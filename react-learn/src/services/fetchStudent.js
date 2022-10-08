const appkey = "demo13_1545210570249";

export async function fetchStudentData() {
    return await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json())
        .then(resp => resp.data);
}
