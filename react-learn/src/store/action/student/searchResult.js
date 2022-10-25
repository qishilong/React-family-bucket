export const studentAndTotal = Symbol("setStundetAndTotal");
export const isLoading = Symbol("setLoading");

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
