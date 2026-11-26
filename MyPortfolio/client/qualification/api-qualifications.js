const create = async (params, credentials, qualification) => {
    try {
        let response = await fetch("/api/qualifications/" + params.userId, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + credentials.t,
            },
            body: qualification,
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
const list = async (signal) => {
    try {
        let response = await fetch("/api/qualifications", {
            method: "GET",
            signal: signal,
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
const read = async (params, signal) => {
    try {
        let response = await fetch("/api/qualifications/" + params.qualificationId, {
            method: "GET",
            signal: signal,
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
const update = async (params, credentials, qualification) => {
    try {
        let response = await fetch("/api/qualifications/" + params.qualificationId, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + credentials.t,
            },
            body: qualification,
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
const remove = async (params, credentials) => {
    try {
        let response = await fetch("/api/qualifications/" + params.qualificationId, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + credentials.t,
            },
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
export { create, list, read, update, remove };

