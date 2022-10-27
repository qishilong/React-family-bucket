export const studentAndTotal = Symbol("setStundetAndTotal");
export const isLoading = Symbol("setLoading");
export const fetchStudent = Symbol("setFetchStudent");


export const setStudentAndTotal = (data, total) => {
    return {
        type: studentAndTotal,
        payload: {
            data: data,
            total,
        },
    };
};

export const setIsLoading = isLoading => {
    return {
        type: isLoading,
        payload: isLoading,
    };
};

export const setFetchStudent = () => {
    return {
        type: fetchStudent,
    };
};
