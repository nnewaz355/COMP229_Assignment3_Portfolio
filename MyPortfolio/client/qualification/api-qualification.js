const create = async (qualification) => {
    const response = await fetch("/api/qualifications", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(qualification),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || data.message || "Could not create qualification");
    }
    return data;
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

