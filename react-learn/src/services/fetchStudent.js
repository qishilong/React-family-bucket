const appkey = "demo13_1545210570249";

export async function getAllStudents() {
    return await fetch("/api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json())
        .then(resp => resp.data);
}

export async function getStudents(page = 1, limit = 10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json())
        .then(resp => resp.data);
}

/**
 *  查询学生
 *  如果传递了key属性（key有值），则按照关键字和性别进行搜索
 *  如果key没有值，则对所有学生进行分页
 */
export async function searchStudents({ page = 1, limit = 10, sex = -1, key = "" } = {}) {
    if (key) {
        // 查询
        const resp = await fetch(
            `/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`,
        )
            .then(resp => resp.json())
            .then(resp => resp.data);
        resp.data = resp.searchList;
        delete resp.searchList;
        return resp;
    } else {
        // 忽略性别，查询全部
        const resp = await getStudents(page, limit);
        resp.data = resp.findByPage;
        delete resp.findByPage;
        return resp;
    }

}